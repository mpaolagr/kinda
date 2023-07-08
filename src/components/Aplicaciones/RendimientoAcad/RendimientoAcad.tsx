import React, { useState } from "react";
import "./RendimientoAcad.css";
import usuario from "../../../assets/persona.png";
import {
  MdMail,
  MdArrowBackIosNew,
  MdDownloadForOffline,
  MdArrowForward,
} from "react-icons/md";
import { IoCalendarSharp, IoPeopleOutline } from "react-icons/io5";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import logo from "../../assets/logo1.svg";
import { useTable } from "react-table";
import Atras from "../../Atras";


function RendimientoAcad() {

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Rendimiento Académico</h2>
              </div>
              <div className="esinferior">
              Te presentamos el progreso académico de tu hijo, según su rendimiento trimestral. También puedes descargar su Boletín de Calificaciones y contactarte con sus profesores en caso de tener alguna consulta.
              </div>
              <button>
               <a href="/solicitudlicencias">Descargar PDF <MdDownloadForOffline /></a> 
              </button>
            </div>
            <Atras/>
            <br></br>
            <div className="row cards essuperior">
            <div className="col-md-4">
                <div className="card bg-white mb-4">
                  <div className="card-body contenido">
                    <div className="esinferior">
                      <strong>
                      <span
                          className={`icon icono-svg `}
                        >
                          <IoCalendarSharp />
                        </span>
                        <h4>2022</h4>
                      </strong>
                    </div>
                    <strong>
                      <h5>Calificación 87</h5>
                    </strong>
                    <p>
                      <span className="iconamarillo">
                        <FaStar />
                      </span>
                      Ganador de teatro
                      <br />
                      <span className="iconamarillo">
                        <FaStar />
                      </span>
                      Ganador de fútbol
                      <br />
                    </p>
                    <div className="esinferior">
                      <p>
                        <strong>
                          <a href="/rendimientoacadaño">
                            Ver más <MdArrowForward />
                          </a>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-white mb-4">
                  <div className="card-body contenido">
                    <div className="esinferior">
                      <strong>
                      <span
                          className={`icon icono-svg `}
                        >
                          <IoCalendarSharp />
                        </span>
                        <h4>2021</h4>
                      </strong>
                    </div>
                    <strong>
                      <h5>Calificación 87</h5>
                    </strong>
                    <p>
                      <span className="iconamarillo">
                        <FaStar />
                      </span>
                      Ganador de teatro
                      <br />
                      <span className="iconamarillo">
                        <FaStar />
                      </span>
                      Ganador de fútbol
                      <br />
                    </p>
                    <div className="esinferior">
                      <p>
                        <strong>
                          <a href="/mensajes">
                            Ver más <MdArrowForward />
                          </a>
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-white mb-4">
                  <div className="card-body contenido">
                    <div className="esinferior">
                      <strong>
                      <span
                          className={`icon icono-svg `}
                        >
                          <IoCalendarSharp />
                        </span>
                        <h4>2019</h4>
                      </strong>
                    </div>
                    <strong>
                      <h5>Calificación 87</h5>
                    </strong>
                    <p>
                      <span className="iconamarillo">
                        <FaStar />
                      </span>
                      Ganador de teatro
                      <br />
                      <span className="iconamarillo">
                        <FaStar />
                      </span>
                      Ganador de fútbol
                      <br />
                    </p>
                    <div className="esinferior">
                      <p>
                        <strong>
                          <a href="/mensajes">
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

export default RendimientoAcad;
