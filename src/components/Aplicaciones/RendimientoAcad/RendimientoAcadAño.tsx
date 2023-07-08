import React, { useState } from "react";
import "./RendimientoAcad.css";
import usuario from "../../../assets/persona.png";
import fondo from "../../../assets/fondo.png";
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


function RendimientoAcadAño() {

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
                <h5>Distinciones</h5>
                <div >
                
                      <span className="iconamarillo">
                        <FaStar />
                      </span>
                      Ganador de teatro
                      <span className="iconamarillo">
                        <FaStar />
                      </span>
                      Ganador de fútbol
                      <span className="iconamarillo">
                        <FaStar />
                      </span>
                      Mejor alumno de su curso
                </div>
            </div>

            <div className="essuperior">
            <h5>Progreso Anual</h5>
            <div className="col-md-6 form-group ">
              <label className="essuperior ">
                Filtrar por materia:
              </label>
              <div className="input-group">
                <select  className="form-control">
                  <option value="">Seleccionar una opción</option>
                  <option value="opcion1">Opción 1</option>
                  <option value="opcion2">Opción 2</option>
                  <option value="opcion3">Opción 3</option>
                </select>
                <div className="input-group-append">
                  <span className="input-group-text"></span>
                </div>
              </div>
              <div className="fondo esinferior">
              <img src={fondo} className="svg-img" />
              </div>
              <h5>
                Profesores:
              </h5>
              <div className=" row essuperior profesores">
               
              <div className="col-md-4">
              <p><img src={usuario} className="svg-img" /></p>
              <strong>Maribel Castillo</strong>
              <p>
              <span className="iconamarillo">
                        <FaStar />
                      </span>
                     Profesora Asignada<br></br>
                    Valores, Espiritualidad y Religión</p>
              </div>
              <div className="col-md-4">
              <p><img src={usuario} className="svg-img" /></p>
              <strong>Maribel Castillo</strong>
              <p>
              <span className="iconamarillo">
                        <FaStar />
                      </span>
                     Profesora Asignada<br></br>
                    Valores, Espiritualidad y Religión</p>
              </div>
              <div className="col-md-4">
              <p><img src={usuario} className="svg-img" /></p>
              <strong>Maribel Castillo</strong>
              <p>
              <span className="iconamarillo">
                        <FaStar />
                      </span>
                     Profesora Asignada<br></br>
                    Valores, Espiritualidad y Religión</p>
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

export default RendimientoAcadAño;
