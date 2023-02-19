import "./SectionStyle.css";
import ListResult from "./ListResult";

const BodyResult = (props: any) => {
  return (
    <div className="List">
      <div className="List-file">
        <div className="Body">{props.data.getFileName()}</div>
        <div className="Body-light">
          <div>Type : {props.data.getFileType()}</div>
          <div>Size : {props.data.getFileSize()}</div>
        </div>
      </div>
      <ListResult data={props.data} downloadHandler={props.downloadHandler} />
    </div>
  );
};

export default BodyResult;
