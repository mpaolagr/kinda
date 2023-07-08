import React, { useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import { FaQuestionCircle } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import AuthCode from "react-auth-code-input";
import "./Login.css";
import logo1 from "../../assets/loginlogo1.svg";
import logo2 from "../../assets/loginlogo2.svg";
import vector1 from "../../assets/login1.svg";
import vector2 from "../../assets/login3.svg";
import vector3 from "../../assets/login2.1.svg";
import vector4 from "../../assets/login 1.1.svg";
import { MdArrowBack } from "react-icons/md";

function Autenticacion() {
  const [value, setValue] = useState();
  const [result, setResult] = useState<string | undefined>();

  const handleOnChange = (res: string) => {
    setResult(res);
  };
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="login">
          <div className="col-md-6 col-xs-12 botn6 d-flex align-items-center ">
            <MdArrowBack />
            <label>Volver al sitio web de Golden Lion</label>
          </div>
          <img className="login-child" alt="" src={vector1} />

          <img className="login-item" alt="" src={vector3} />

          <img className="login-inner" alt="" src={vector2} />

          <img className="vector-icon" alt="" src={vector4} />

          <div className="col-md-12 col-xs-12 d-flex flex-wrap justify-content-center text-center esinferior">
            <img src={logo1} className="col-md-6 col-xs-12 logo1" />
            <img src={logo2} className="col-md-6 col-xs-12 logo2" />
          </div>
          <div className="form2 essuperior">
            <div className="col-md-4 offset-md-4 col-xs-12 justify-content-center text-center esinferior">
              <h1 className="text-center">¡Bienvenido!</h1>
              <p className="text-center text-wrap">
                <h5>
                  Ingresa el código que te enviamos a WhatsApp al número (+591)
                  77578343
                </h5>
              </p>
            </div>
            <div className="col-md-4 offset-md-4 col-10 offset-1 formulario2 essuperior  ">
              <div className="label-container esinferior">
                <label>Código de ingreso:</label>
              </div>
              <AuthCode allowedCharacters="numeric" onChange={handleOnChange} />
              <div className="row essuperior padd ">
                <div className="col-md-6 col-6 back d-flex align-items-center">
                  <MdArrowBack />
                  <b>Cambiar número</b>
                </div>
                <div className="col-md-6 col-6 d-flex align-items-center justify-content-end">
                  <button>
                    <a href="/solicitudlicencias">Reenviar código </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <footer className="footer col-md-12 col-12 ">
            <div className="d-flex align-items-center justify-content-center  ">
              <div className="col-auto d-none d-md-block">
                <span className="footer-text">
                  © 2023 Jardín de Victoria S.R.L. | Todos los Derechos
                  Reservados
                </span>
              </div>
              <div className="col-auto d-none d-md-block">
                <span className="social-icons">
                  <FaFacebookSquare className="icon" />
                  <FaInstagram className="icon" />
                  <BsMessenger className="icon" />
                </span>
              </div>
            </div>
            <div className=" ">
            <div className="col-auto d-md-none d-block">
              <span className="social-icons d-flex justify-content-center">
                <FaFacebookSquare className="icon" />
                <FaInstagram className="icon" />
                <BsMessenger className="icon" />
              </span>
            </div>
            <div className="col-auto d-md-none d-block">
              <span className="footer-text text-center d-flex justify-content-center">
                © 2023 Jardín de Victoria S.R.L. | Todos los Derechos Reservados
              </span>
            </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Autenticacion;
