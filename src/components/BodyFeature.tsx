import "./SectionStyle.css";
import ListFeature from "./ListFeature";

const BodyFeature = (props: any) => {
  return (
    <div className="List">
      <div className="List-file">
        <div className="Body">{props.data.getFileName()}</div>
        <div className="Body-light">
          <div>Type : {props.data.getFileType()}</div>
          <div>Size : {props.data.getFileSize()}</div>
        </div>
      </div>
      <ListFeature
        data={props.data}
        setFileList={props.setFileList}
        chooseFeature={props.chooseFeature}
      />
    </div>
  );
};

export default BodyFeature;
