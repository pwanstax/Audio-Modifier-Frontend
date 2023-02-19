import "./Style.css";
import "./SectionStyle.css";
import "./ListResult.css";
import Data from "./Data";
import BodyResult from "./BodyResult";
import BackToHome from "./BackToHome";

const SectionResult = (props: any) => {
  return (
    <div className="Block">
      <div className="Flex">
        <div className="Table">
          <div className="Header-two Table-header">
            <div>File</div>
            <div className="Header-result">
              <label>STT Result</label>
              <label>VAD Result</label>
            </div>
          </div>
          {props.fileList.map((data: Data, i: number) => (
            <BodyResult
              data={data}
              key={i}
              downloadHandler={props.downloadHandler}
            />
          ))}
        </div>
      </div>
      <div className="Flex">
        <div className="Button-group">
          {props.processedAll && props.showDownloadAllBtn && (
            <button className="Button-one" onClick={props.downloadAllHandler}>
              Download All
            </button>
          )}
          {props.processedAll && <BackToHome />}
        </div>
      </div>
    </div>
  );
};

export default SectionResult;
