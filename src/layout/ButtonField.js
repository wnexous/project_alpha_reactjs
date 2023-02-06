import style from "./layout.module.css";
import "./../pages/stylesheet.css";

export default function ButtonField(props) {
  return <button className={style.ButtonField}>{props.children}</button>;
}
