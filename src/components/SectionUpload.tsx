import Data from "./Data";
import "./Style.css";
import "./SectionStyle.css";
import BodyUpload from "./BodyUpload";
import BacktoHome from "./BackToHome";

const SectionUpload = (props: any) => {
  const fileChangedHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let fileList = e.target!.files!;
    let dataList = [] as Data[];
    for (var i = 0; i < fileList.length; i++) {
      dataList.push(new Data(fileList[i]));
    }
    props.setFileList(dataList);
  };

  const nextHandler = () => {
    props.setSection("FEATURE");
    let newFileList = props.fileList.filter(
      (data: Data) => data.uploadStatus === "DONE"
    );
    props.setFileList(newFileList);
  };

  return (
    <div className="Block">
      <div className="Flex">
        <div className="Table">
          <div className="Header-two Table-header">
            <div>File</div>
            <div className="Flex">Status</div>
          </div>
          {props.fileList.map((d: Data, i: number) => (
            <BodyUpload data={d} key={i} />
          ))}
        </div>
      </div>
      <div className="Flex">
        {props.showUploadBtn && (
          <div className="Button-group">
            <button
              className="Button-one"
              onClick={() => document.getElementById("browseFile")?.click()}
              data-test="browse-button"
            >
              Browse
            </button>
            <input
              type="file"
              accept=".wav,.flac"
              multiple
              onChange={(e) => fileChangedHandler(e)}
              id="browseFile"
              hidden
              data-testid="browse-file"
            ></input>
            <button
              className="Button-one Upload"
              onClick={props.uploadHandler}
              data-test="upload-button"
            >
              Upload
            </button>
          </div>
        )}
        {!props.showUploadBtn && (
          <div className="Button-group">
            {props.uploadedAll && !props.showBackToHomeBtn && (
              <button className="Button-one Upload" onClick={nextHandler}>
                Next
              </button>
            )}
            {props.uploadedAll && props.showBackToHomeBtn && <BacktoHome />}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionUpload;
