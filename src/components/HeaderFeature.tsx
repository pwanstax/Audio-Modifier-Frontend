import "./Style.css";
import "./HeaderFeature.css";

const HeaderFeature = (props: any) => {
  return (
    <div className="Header-feature Flex">
      <label className="Container-header-feature">
        <input
          type="checkbox"
          onChange={(e) => {
            props.functionChange(props.feature, e.target.checked);
          }}
        ></input>
        <span className="Checkbox-header-feature"></span>
        <span>{props.feature}</span>
      </label>
    </div>
  );
};

export default HeaderFeature;
