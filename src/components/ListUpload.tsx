import "./Style.css";
import "./ListUpload.css";
import ClipLoader from "react-spinners/ClipLoader";

const ListUpload = (props: any) => {
  return (
    <div className="List-upload">
      {props.status === "UPLOADING" && (
        <span>
          <ClipLoader color="#2a4a55" />
        </span>
      )}
      {props.status === "DONE" && <span>✓</span>}
      {props.status === "ERROR" && <div className="Error">{props.message}</div>}
    </div>
  );
};

export default ListUpload;
