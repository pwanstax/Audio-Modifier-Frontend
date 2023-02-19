import "./Style.css";
import "./ListFeature.css";

const ListFeature = (props: any) => {
  return (
    <div className="List-feature">
      <label className="Container-feature">
        <input
          type="checkbox"
          onChange={(e) => {
            props.chooseFeature(props.data, "STT", e.target.checked);
          }}
          checked={props.data.chooseSTT}
        ></input>
        <span className="Checkbox-feature"></span>
      </label>
      <label className="Container-feature">
        <input
          type="checkbox"
          onChange={(e) => {
            props.chooseFeature(props.data, "VAD", e.target.checked);
          }}
          checked={props.data.chooseVAD}
        ></input>
        <span className="Checkbox-feature"></span>
      </label>
    </div>
  );
};

export default ListFeature;
