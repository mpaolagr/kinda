import { useEffect, useState } from "react";
import "./PerfilUsuario.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo1.svg";
import PhoneInput from "react-phone-number-input";
import usuario from "../../../assets/persona.png";
import {
  MdMail,
  MdArrowForward,
  MdGirl,
  MdBoy,
  MdTabletMac,
  MdLocationOn,
} from "react-icons/md";
import { IoMdBriefcase, IoMdHeart } from "react-icons/io";
import { SlScreenSmartphone } from "react-icons/sl";
import { FaGraduationCap, FaCheckCircle, FaPen } from "react-icons/fa";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoBriefcase } from "react-icons/io5";
import Atras from "../../Atras";
function PerfilUsuario() {
    const [value, setValue] = useState();
    const [result, setResult] = useState<string | undefined>();
  
  return (
    <div className="homepage-container">
      <div className="homepage-content editarus">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Editar información</h2>
              </div>
              En esta sección puedes editar tu perfil de usuario, añadiendo o
              modificando la información del siguiente formulario.
            </div>
            <Atras />

            <br></br>

            <div className="row titular esinferior essuperior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <p className="mb-0">
                       Cambiar foto de perfil <FaPen />
                    </p>
              </div>

              <span className="icon">
                          <MdTabletMac /><strong className="ms-2">Información de contacto</strong>
                        </span>
            </div>
            <div className="row form">
                <div className="col-md-6 col-6 form">
                <div className="label-container">
                <label>Ingresa tu número de usuario:</label>
              </div>
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                defaultCountry="BO"
                value={value}
                onChange={setValue}
              />
                </div>
                <div className="col-md-6 col-6 form">
                <label htmlFor="licencia-desde">
                Correo electrónico:
              </label>
              <div className="input-group">
                <input
                  id="licencia-desde"
                  className="form-control"
                  placeholder="ejemplo1@gmail.com"
                />
              </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilUsuario;
