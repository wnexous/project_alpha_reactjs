import { FaFacebook } from "react-icons/fa";
import InputField from "../layout/InputField";
import ButtonField from "../layout/ButtonField";
import { Link } from "react-router-dom";
import Home from "./../../src/pages/Home";
import Register from "./Register";

import style from "./pages.module.css";
// import {alpha} from "./../../public/alpha"

export default function Login() {
  return (
    <div className={[style.centralize_force].join(" ")}>
      <form className={style.FormField}>
        <span className={[style.centralize_normal, style.logo].join(" ")}>
          <img src="/logo.svg" />
        </span>
        <div className={style.FormField_INSIDE}>
          <InputField placeholder="Nome" />
          <InputField placeholder="Senha" type="password" config={[]} />
        </div>
        <div className={style.centralize_normal}>
          <ButtonField>Entrar</ButtonField>
        </div>
        <p>
          Ainda não participa da Geração Alpha?{" "}
          <Link to="/register">crie sua conta Alpha.</Link>
        </p>
      </form>
    </div>
  );
}
