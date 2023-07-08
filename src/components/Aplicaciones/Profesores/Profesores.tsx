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
import logo from "../../assets/logo1.svg";
import Atras from "../../Atras";
function Profesores() {
  const [showBadge, setShowBadge] = useState(true);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="homepage-container">
      <div className="homepage-content profesor">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Listado de profesores</h2>
              </div>
              <div>
                Te presentamos a quienes están a cargo de la educación de tu
                hijo. Puedes conocer la trayectoria profesional de cada uno de
                ellos y solicitar reuniones de consulta para conocer el
                rendimiento de tu hijo.
              </div>
            </div>
            <Atras />

            <br></br>
            <div className="row cards bold-text ">
              <div className="row">
                <div className="col-md-4">
                  <div className="card bg-white mb-4">
                    <div className="card-body contenido">
                      <div className="row">
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                          <div className="esinferior">
                            <img src={usuario} className="svg-img" />
                          </div>
                        </div>
                        <div className="col-md-9 fontxs" >
                          <strong>Maribel Castillo</strong>
                          <p>
                            <span className="iconamarillo">
                              <FaStar />
                            </span>
                            Profesora Asignada<br></br>
                            Valores, Espiritualidad y Religión
                          </p>
                          <div className="esinferior">
                            <p>
                              <strong>
                                <a href="/perfilprofesor">
                                  Ver más <MdArrowForward />
                                </a>
                              </strong>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-md-4">
                  <div className="card bg-white mb-4">
                    <div className="card-body contenido">
                      <div className="row">
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                          <div className="esinferior">
                            <img src={usuario} className="svg-img" />
                          </div>
                        </div>
                        <div className="col-md-9 fontxs" >
                          <strong>Maribel Castillo</strong><p></p>
                          <p>
                            Valores, Espiritualidad y Religión
                          </p>
                          <div className="esinferior">
                            <p>
                              <strong>
                                <a href="/licencia">
                                  Ver más <MdArrowForward />
                                </a>
                              </strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-white mb-4">
                    <div className="card-body contenido">
                      <div className="row">
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                          <div className="esinferior">
                            <img src={usuario} className="svg-img" />
                          </div>
                        </div>
                        <div className="col-md-9 fontxs" >
                          <strong>Maribel Castillo</strong><p></p>
                          <p>
                            Valores, Espiritualidad y Religión
                          </p>
                          <div className="esinferior">
                            <p>
                              <strong>
                                <a href="/licencia">
                                  Ver más <MdArrowForward />
                                </a>
                              </strong>
                            </p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card bg-white mb-4">
                    <div className="card-body contenido">
                      <div className="row">
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                          <div className="esinferior">
                            <img src={usuario} className="svg-img" />
                          </div>
                        </div>
                        <div className="col-md-9 fontxs" >
                          <strong>Maribel Castillo</strong><p></p>
                          <p>
                            Valores, Espiritualidad y Religión
                          </p>
                          <div className="esinferior">
                            <p>
                              <strong>
                                <a href="/licencia">
                                  Ver más <MdArrowForward />
                                </a>
                              </strong>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profesores;
