import { FaFacebook } from "react-icons/fa";
import InputField from "../layout/InputField";
import ButtonField from "../layout/ButtonField";
import { Link } from "react-router-dom";
import Home from "./Home"

import style from "./pages.module.css";
// import {alpha} from "./../../public/alpha"

export default function Register() {
  return (
    <div className={[style.centralize_force].join(" ")}>
      <form className={style.FormField}>
        <span className={[style.centralize_normal, style.logo].join(" ")}>
          <img src="/logo.svg" />
        </span>
        <div className={style.FormField_INSIDE}>
          <InputField placeholder="Nome completo" config={["only-string", "allow-space"]} />
          <InputField placeholder="Nome de usuário" config={["only-string", "only-number"]}/>
          <InputField placeholder="Número do celular" config={["only-number"]} />
          <InputField placeholder="Senha" type="password" />
        </div>
        <div className={style.centralize_normal}>
          <ButtonField>Cadastrar</ButtonField>
        </div>
        <p>Ao clicar no botão de cadastro, você estará de acordo com nossos <Link to="/signin">termos de serviço.</Link></p>
        <div style={{width: "90%", borderBottom: "1px solid black", opacity: "30%", marginInline: "auto"}}></div>
        <p>Já possui uma conta Alpha? <Link to="/signin">Clique aqui para entrar.</Link></p>
      </form>
    </div>
  );
}
