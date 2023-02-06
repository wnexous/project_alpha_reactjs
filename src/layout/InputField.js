import style from "./layout.module.css";
import "./../pages/stylesheet.css";
/**
 * @augments config ["only-number", "only-number", "allow-space"]
 * */
export default function InputField(
  props = {
    config: Object,
    type: String,
    placeholder: String,
  }
) {
  const stringCleanner = (s) => {
    return `${s}`
      .split("")
      .map((m) => {
        if (
          (props.config.includes("allow-space") && m === " ") ||
          (props.config.includes("only-number") &&
            new RegExp(/([0-9])/g).test(m)) ||
          (props.config.includes("only-string") &&
            new RegExp(/([a-z]|[A-Z])/g).test(m))
        )
        return m ;
      })
      .join("")
  };

  const changeValue = (e) => {
    e.target.value = stringCleanner(e.target.value);
  };

  return (
    <label className={[style.centralize_normal].join(" ")}>
      <input
        placeholder={props.placeholder}
        className={style.InputField}
        type={props.type || "text"}
        onChange={(e) => {
          e.preventDefault();
          changeValue(e);
        }}
      />
      <br />
    </label>
  );
}
