import ClipLoader from "react-spinners/ClipLoader";
import "./Style.css";
import "./ListResult.css";

const ListResult = (props: any) => {
  return (
    <div className="List-result">
      <div className="Container-result">
        {props.data.processStatusSTT === "PROCESSING" && (
          <div>
            <ClipLoader color="#2a4a55" />
          </div>
        )}
        {props.data.processStatusSTT === "DONE" && (
          <div>
            <button
              className="Button-one"
              onClick={() => props.downloadHandler(props.data, "STT")}
            >
              Download
            </button>
          </div>
        )}
        {props.data.processStatusSTT === "ERROR" && (
          <div className="Error Error-twoline">{props.data.errorSTT}</div>
        )}
      </div>
      <div className="Container-result">
        {props.data.processStatusVAD === "PROCESSING" && (
          <div>
            <ClipLoader color="#2a4a55" />
          </div>
        )}
        {props.data.processStatusVAD === "DONE" && (
          <div>
            <button
              className="Button-one"
              onClick={() => {
                props.downloadHandler(props.data, "VAD");
              }}
            >
              Download
            </button>
          </div>
        )}
        {props.data.processStatusVAD === "ERROR" && (
          <div className="Error">{props.data.errorVAD}</div>
        )}
      </div>
    </div>
  );
};

export default ListResult;
