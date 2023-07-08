import React, { useState } from "react";
import "./Profesores.css";
import usuario from "../../../assets/persona.png";
import pdf from "../../../assets/pdf1.png";
import doc from "../../../assets/doc1.png";
import { Link, useNavigate } from "react-router-dom";
import { MdMail, MdArrowBackIosNew, MdArrowForward } from "react-icons/md";
import { FaBorderAll, FaStar } from "react-icons/fa";
import { IoCalendarOutline, IoTimeSharp } from "react-icons/io5";
import { BiDownload } from "react-icons/bi";
import { FaGraduationCap, FaPen } from "react-icons/fa";
import logo from "../../../assets/logo1.svg";
import Atras from "../../Atras";
function PerfilProfesor() {
  const [showBadge, setShowBadge] = useState(true);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="homepage-container">
      <div className="homepage-content perfilprofesor">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Perfil del profesor</h2>
              </div>
              <div>
              Te presentamos a quien está a cargo de la educación de Juanito Gómez. Puedes conocer su trayectoria y solicitar una reunión con él/ella para consultarle sobre el rendimiento de tu hijo. 
              </div>
            </div>
            <Atras />

            <br></br>
            <div className="row cards bold-text ">
            <div className="row cards">
              <div className="col-md-4">
                <div className="card bg-white mb-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center esinferior">
                      <img
                        src={usuario}
                        alt="Imagen Izquierda"
                        className="svg-img"
                      />
                      <img
                        src={logo}
                        alt="Imagen Derecha"
                        className="svg-img"
                      />
                    </div>

                    <p className="iconamarillo">
                           
                              <FaStar />
                            
                            &nbsp; Profesora Asignada
                          </p>
                          <strong>Maribel Castillo</strong><br></br> 
                    <p>
                      <span className="icon">
                        <MdMail />
                      </span>{" "}
                      m.cas@gmail.com
                      <br />
                      <span className={`icon ${showBadge ? "icon-badge" : ""}`}>
                        <FaGraduationCap />
                      </span>{" "}
                      Valores, espiritualidad y religiones <br />
                      <span className="icon">
                        <FaGraduationCap />
                      </span>{" "}
                      Inglés
                      <br />
                    </p>
                    <p>
                    <button className="btnpp">
               <a href="/agendarreunion">Solicitar licencia <FaPen/></a> 
              </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfilProfesor;
