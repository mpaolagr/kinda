import React, { useState } from "react";
import "./Kardex.css";
import usuario from "../../../assets/persona.png";
import pdf from "../../../assets/pdf1.png";
import doc from "../../../assets/doc1.png";
import { Link, useNavigate } from 'react-router-dom';
import { MdMail, MdArrowBackIosNew, MdArrowForward } from "react-icons/md";
import { FaBorderAll, FaListAlt } from "react-icons/fa";
import { IoCalendarOutline, IoTimeSharp } from "react-icons/io5";
import { BiDownload } from "react-icons/bi";
import logo from "../../assets/logo1.svg";
import Atras from "../../Atras";
function Kardex() {
  const [showBadge, setShowBadge] = useState(true);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); 
  };
  return (
    <div className="homepage-container">
      <div className="homepage-content kardex">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Kardex</h2>
              </div>
              <div >
              En esta sección encontrarás toda la documentación de tu hijo que se requirió en el momento de su inscripción. Y si todavía tienes documento que se encuentran pendientes de entrega, te invitamos a cargarlos para ponerte al día.
              </div>
            </div>
            <div className="d-flex justify-content-between contenedor">
      <div className="elemento-izquierdo"><Atras/></div>
      <div className="elemento-derecho">Vista: <FaBorderAll/> <FaListAlt/> </div>
    </div>
           
            <br></br>
            <div className="row cards bold-text ">
            <div className="col-md-4">
            <div className="box-rim card bg-white mb-4">
                  <div className="card-body contenido">
                    <div className="esinferior">
                    <img src={doc} className="svg-img" />
                    </div>
                    <div className="esinferior">
                      <h4>Hoja de informe RUDE</h4>
                    </div>
                    <p>
                      Lunes 17 de Agosto
                      </p>
                      <p>
                      Descargar <span className="icon">
                        <BiDownload />
                        </span>
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
              <div className="col-md-4">
            <div className="box-rim card bg-white mb-4">
                  <div className="card-body contenido">
                    <div className="esinferior">
                    <img src={pdf} className="svg-img" />
                    </div>
                    <div className="esinferior">
                    <h4>Libreta escolar del alumno</h4>
                    </div>
                    <p>
                    <span className="icon">
                        <IoTimeSharp />
                        </span>
                      documento en revisión
                      </p>
                      <p>
                      Descargar <span className="icon">
                        <BiDownload />
                        </span>
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
  );
}

export default Kardex;
