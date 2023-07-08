import React, { useState } from "react";
import "./PlanificacionA.css";
import usuario from "../../../assets/persona.png";
import {
  MdBook,
  MdCalendarMonth,
  MdFlag,
  MdArrowForward,
} from "react-icons/md";
import { IoCalendarSharp } from "react-icons/io5";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import logo from "../../assets/logo1.svg";
import { useTable } from "react-table";
import Atras from "../../Atras";


function PlanificacionA() {

  return (
    <div className="homepage-container planificaciona">
      <div className="homepage-content">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Planificación académica</h2>
              </div>
              <div className="esinferior">
              Te presentamos las metas de aprendizaje que perseguimos en cada instancia, los alcances de nuestro plan de estudios y el calendario académico.
              </div>
            </div>
            <Atras/>
            <br></br>
            <div className="row cards essuperior">
            <div className="col-md-4">
                <div className="card bg-white mb-4">
                  <div className="card-body contenido">
                    <div className="esinferior ">
                      <strong className="d-flex align-items-center">
                      <span
                          className={`icon icono-svg `}
                        >
                          <MdBook />
                        </span>
                        <h4>Plan de estudios</h4>
                      </strong>
                    </div>
                    <p className="text">
                    Conoce qué se avanzará en cada materia y en cada trimestre. Así podrás hacer seguimiento a la evolución del aprendizaje de tu hijo.
                    </p>
                    <div className="esinferior">
                      <p>
                        <strong>
                          <a href="/planestudios">
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
                    <div className="esinferior ">
                      <strong className="d-flex align-items-center">
                      <span
                          className={`icon icono-svg `}
                        >
                          <MdFlag />
                        </span>
                        <h4>Metas de aprendizaje</h4>
                      </strong>
                    </div>
                    <p className="text">
                    Aquí tienes una explicación detalla de los objetivos a alcanzar en cada unidad de aprendizaje.
                    </p>
                    <div className="esinferior">
                      <p>
                        <strong>
                          <a href="/metasaprendizaje">
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
                    <div className="esinferior ">
                      <strong className="d-flex align-items-center">
                      <span
                          className={`icon icono-svg `}
                        >
                          <MdCalendarMonth />
                        </span>
                        <h4>Calendario académicos</h4>
                      </strong>
                    </div>
                    <p className="text">
                    Toma nota de las fechas importantes. Nuestro calendario reúne la programación de capacitaciones, evaluaciones, festividades y feriados.
                    </p>
                    <div className="esinferior">
                      <p>
                        <strong>
                          <a href="/calendarioacademico">
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

export default PlanificacionA;
