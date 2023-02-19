import "./SectionStyle.css";
import ListUpload from "./ListUpload";

const BodyUpload = (props: any) => {
  return (
    <div className="List">
      <div className="List-file">
        <div className="Body">{props.data.getFileName()}</div>
        <div className="Body-light">
          <div>Type : {props.data.getFileType()}</div>
          <div>Size : {props.data.getFileSize()}</div>
        </div>
      </div>
      <ListUpload
        status={props.data.uploadStatus}
        message={props.data.errorUpload}
      />
    </div>
  );
};
export default BodyUpload;
