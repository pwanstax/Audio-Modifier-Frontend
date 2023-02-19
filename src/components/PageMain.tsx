import * as React from "react";
import axios from "axios";
import Data from "./Data";
import NavBar from "./NavBar";
import SectionUpload from "./SectionUpload";
import SectionFeature from "./SectionFeature";
import SectionResult from "./SectionResult";
import "./Style.css";

export interface PageMainProps {}

export interface PageMainState {
  token: string;
  section: string;
  fileList: Data[];
  showUploadBtn: boolean;
  showBackToHomeBtn: boolean;
  uploadedAmount: number;
  uploadedAll: boolean;
  processAmount: number;
  processedAmount: number;
  processedAll: boolean;
  showDownloadAllBtn: boolean;
}
export default class PageMain extends React.Component<
  PageMainProps,
  PageMainState
> {
  state: PageMainState = {
    token: "",
    section: "UPLOAD", // ["UPLOAD", "FEATURE", "RESULT"]
    fileList: [],
    showUploadBtn: true,
    showBackToHomeBtn: true,
    uploadedAmount: 0,
    uploadedAll: false,
    processAmount: 0,
    processedAmount: 0,
    processedAll: false,
    showDownloadAllBtn: false,
  };

  private url = "http://35.240.251.138:8080";

  setSection = (newSection: string) => {
    this.setState({ section: newSection });
  };

  setFileList = (newFileList: []) => {
    this.setState({ fileList: newFileList });
  };

  getToken = () => {
    axios.get(this.url + "/token/getToken").then((res) => {
      this.setState({ token: res.data.token });
    });
  };

  requestSTT = (data: Data) => {
    axios
      .get(this.url + "/process/stt", {
        headers: {
          Authorization: this.state.token,
          id: data.id,
        },
      })
      .then((res) => {
        let newFileList = this.state.fileList.map((d: Data) => {
          if (d === data) {
            d.processStatusSTT = "DONE";
            d.resultSTT = res.data.stt.results;
          }
          return d;
        });
        this.setState({
          fileList: newFileList,
          processedAmount: this.state.processedAmount + 1,
          showDownloadAllBtn: true,
        });
        this.setState({
          processedAll: this.state.processedAmount === this.state.processAmount,
        });
      })
      .catch((error) => {
        let newFileList = this.state.fileList.map((d: Data) => {
          if (d === data) {
            d.processStatusSTT = "ERROR";
            if (error.response) {
              d.errorSTT = "Cannot process this file.";
            } else if (error.request) {
              d.errorSTT = "Process failed.\nPlease try again.";
            } else {
              d.errorSTT = "Something went wrong.";
            }
          }
          return d;
        });
        this.setState({
          fileList: newFileList,
          processedAmount: this.state.processedAmount + 1,
        });
        this.setState({
          processedAll: this.state.processedAmount === this.state.processAmount,
        });
      });
  };

  requestVAD = (data: Data) => {
    axios
      .get(this.url + "/process/vad", {
        headers: {
          Authorization: this.state.token,
          id: data.id,
        },
      })
      .then((res) => {
        let newFileList = this.state.fileList.map((d: Data) => {
          if (d === data) {
            if (res.headers["content-type"] === "text/csv") {
              d.processStatusVAD = "DONE";
              d.resultVAD = res.data;
              this.setState({ showDownloadAllBtn: true });
            } else {
              d.processStatusVAD = "ERROR";
              d.errorVAD = "Something went wrong.";
            }
          }
          return d;
        });
        this.setState({
          fileList: newFileList,
          processedAmount: this.state.processedAmount + 1,
        });
        this.setState({
          processedAll: this.state.processedAmount === this.state.processAmount,
        });
      })
      .catch((error) => {
        let newFileList = this.state.fileList.map((d: Data) => {
          if (d === data) {
            d.processStatusVAD = "ERROR";
            if (error.response) {
              d.errorVAD = "Cannot process this file.";
            } else if (error.request) {
              d.errorVAD = "Process failed.\nPlease try again.";
            } else {
              d.errorVAD = "Something went wrong.";
            }
          }
          return d;
        });
        this.setState({
          fileList: newFileList,
          processedAmount: this.state.processedAmount + 1,
        });
        this.setState({
          processedAll: this.state.processedAmount === this.state.processAmount,
        });
      });
  };

  uploadHandler = () => {
    if (this.state.fileList.length > 0) {
      let newFileList = this.state.fileList.map((data: Data) => {
        data.uploadStatus = "UPLOADING";
        return data;
      });
      this.setState({ fileList: newFileList, showUploadBtn: false });
      for (let i = 0; i < this.state.fileList!.length; i++) {
        var sendData = new FormData();
        sendData.append("audiofile", this.state.fileList![i].file);
        axios
          .post(this.url + "/upload/audiofile", sendData, {
            headers: {
              Authorization: this.state.token,
              amount: i + 1,
            },
          })
          .then((res) => {
            let newFileList = this.state.fileList.map((data: Data) => {
              if (data === this.state.fileList[i]) {
                data.id = res.data.id;
                data.uploadStatus = "DONE";
              }
              return data;
            });
            this.setState({
              fileList: newFileList,
              uploadedAmount: this.state.uploadedAmount + 1,
              showBackToHomeBtn: false,
            });
            this.setState({
              uploadedAll:
                this.state.uploadedAmount === this.state.fileList.length,
            });
          })
          .catch((error) => {
            let newFileList = this.state.fileList.map((data: Data) => {
              if (data === this.state.fileList[i]) {
                data.uploadStatus = "ERROR";
                if (error.response) {
                  data.errorUpload = "Cannot upload this file.";
                } else if (error.request) {
                  data.errorUpload = "Upload failed.\nPlease try again.";
                } else {
                  data.errorUpload = "Something went wrong.";
                }
              }
              return data;
            });
            this.setState({
              fileList: newFileList,
              uploadedAmount: this.state.uploadedAmount + 1,
            });
            this.setState({
              uploadedAll:
                this.state.uploadedAmount === this.state.fileList.length,
            });
          });
      }
    }
  };

  processHandler = () => {
    let goToResult = false;
    for (let i = 0; i < this.state.fileList.length; i++) {
      if (
        this.state.fileList[i].chooseSTT ||
        this.state.fileList[i].chooseVAD
      ) {
        goToResult = true;
        break;
      }
    }
    if (goToResult) {
      this.setState({ section: "RESULT" });
      let count = 0;
      for (let i = 0; i < this.state.fileList.length; i++) {
        if (this.state.fileList[i].chooseSTT) {
          count++;
          let newFileList = this.state.fileList.map((data: Data) => {
            if (data === this.state.fileList[i])
              data.processStatusSTT = "PROCESSING";
            return data;
          });
          this.setState({ fileList: newFileList });
          this.requestSTT(this.state.fileList[i]);
        }
        if (this.state.fileList[i].chooseVAD) {
          count++;
          let newFileList = this.state.fileList.map((data: Data) => {
            if (data === this.state.fileList[i])
              data.processStatusVAD = "PROCESSING";
            return data;
          });
          this.setState({ fileList: newFileList });
          this.requestVAD(this.state.fileList[i]);
        }
      }
      this.setState({ processAmount: count });
    }
  };

  downloadHandler = (downloadFile: Data, feature: string) => {
    const element = document.createElement("a");
    let file, suffix;
    if (feature === "STT") {
      file = JSON.stringify(downloadFile.resultSTT);
      suffix = ".json";
    } else if (feature === "VAD") {
      file = downloadFile.resultVAD;
      suffix = ".csv";
    }
    element.href = URL.createObjectURL(new Blob([file]));
    element.download =
      downloadFile.getFileName() +
      "_" +
      downloadFile.getFileType().slice(1) +
      suffix;
    document.body.appendChild(element);
    element.click();
    element.parentNode?.removeChild(element);
  };

  downloadAllHandler = () => {
    const zip = require("jszip")();
    for (let i = 0; i < this.state.fileList.length; i++) {
      if (this.state.fileList[i].processStatusSTT === "DONE") {
        zip.file(
          this.state.fileList[i].getFileName() +
            "_" +
            this.state.fileList[i].getFileType().slice(1) +
            ".json",
          JSON.stringify(this.state.fileList[i].resultSTT)
        );
      }
      if (this.state.fileList[i].processStatusVAD === "DONE") {
        zip.file(
          this.state.fileList[i].getFileName() +
            "_" +
            this.state.fileList[i].getFileType().slice(1) +
            ".csv",
          this.state.fileList[i].resultVAD
        );
      }
    }
    const fileSaver = require("file-saver");
    zip.generateAsync({ type: "blob" }).then((content: any) => {
      fileSaver.saveAs(content, "result.zip");
    });
  };

  componentDidMount() {
    window.addEventListener("beforeunload", (event) => {
      event.preventDefault();
      event.returnValue = "";
    });

    window.addEventListener("unload", (event) => {
      axios.delete(this.url + "/clear", {
        headers: {
          Authorization: this.state.token,
        },
      });
    });
  }

  render() {
    if (this.state.token === "") this.getToken();
    return (
      <div>
        <NavBar data-test="navbar" currentPage="MAIN" />
        <div className="Title">Voice Processing</div>
        <div data-testid="header" className="Header-one Main-header">
          {this.state.section === "UPLOAD" && "Upload Audio File"}
          {this.state.section === "FEATURE" && "Choose Feature"}
          {this.state.section === "RESULT" && "Download Result"}
        </div>
        {this.state.section === "UPLOAD" && (
          <SectionUpload
            fileList={this.state.fileList}
            setSection={this.setSection}
            setFileList={this.setFileList}
            uploadHandler={this.uploadHandler}
            uploadedAll={this.state.uploadedAll}
            showUploadBtn={this.state.showUploadBtn}
            showBackToHomeBtn={this.state.showBackToHomeBtn}
          />
        )}
        {this.state.section === "FEATURE" && (
          <div>
            <SectionFeature
              fileList={this.state.fileList}
              setFileList={this.setFileList}
              processHandler={this.processHandler}
            />
          </div>
        )}
        {this.state.section === "RESULT" && (
          <SectionResult
            fileList={this.state.fileList}
            setFileList={this.setFileList}
            processedAll={this.state.processedAll}
            downloadHandler={this.downloadHandler}
            downloadAllHandler={this.downloadAllHandler}
            showDownloadAllBtn={this.state.showDownloadAllBtn}
          />
        )}
      </div>
    );
  }
}
