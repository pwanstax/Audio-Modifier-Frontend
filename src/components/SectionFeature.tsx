import "./Style.css";
import "./SectionStyle.css";
import Data from "./Data";
import HeaderFeature from "./HeaderFeature";
import BodyFeature from "./BodyFeature";

const SectionFeature = (props: any) => {
  function chooseFeature(file: Data, feature: string, check: boolean) {
    let newFileList = [] as Data[];
    if (feature === "STT") {
      newFileList = props.fileList.map((data: Data) => {
        if (data === file) data.chooseSTT = check;
        return data;
      });
    } else if (feature === "VAD") {
      newFileList = props.fileList.map((data: Data) => {
        if (data === file) data.chooseVAD = check;
        return data;
      });
    }
    props.setFileList(newFileList);
  }

  function chooseAllFeature(feature: string, check: boolean) {
    let newFileList = [] as Data[];
    if (feature === "STT") {
      newFileList = props.fileList.map((data: Data) => {
        data.chooseSTT = check;
        return data;
      });
    } else if (feature === "VAD") {
      newFileList = props.fileList.map((data: Data) => {
        data.chooseVAD = check;
        return data;
      });
    }
    props.setFileList(newFileList);
  }

  return (
    <div className="Block">
      <div className="Flex">
        <div className="Table">
          <div className="Header-two Table-header">
            <div>File</div>
            <div className="Flex">
              <HeaderFeature feature="STT" functionChange={chooseAllFeature} />
              <HeaderFeature feature="VAD" functionChange={chooseAllFeature} />
            </div>
          </div>
          {props.fileList.map((data: Data, i: number) => (
            <BodyFeature
              data={data}
              key={i}
              setFileList={props.setFileList}
              chooseFeature={chooseFeature}
            />
          ))}
        </div>
      </div>
      <div className="Flex">
        <div className="Button-group">
          <button className="Button-one Process" onClick={props.processHandler}>
            Process
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionFeature;
