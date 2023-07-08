import React, { useState } from "react";
import "./MetasAprendizaje.css";
import usuario from "../../../assets/persona.png";
import {
  MdMail,
  MdCalculate,
  MdDownloadForOffline,
  MdArrowForward,
} from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { FaStar, FaCheckCircle } from "react-icons/fa";
import logo from "../../assets/logo1.svg";
import { useTable } from "react-table";
import Atras from "../../Atras";

function MetasAprendizaje() {
  return (
    <div className="homepage-container metasap">
      <div className="homepage-content">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Metas de aprendizaje</h2>
              </div>
              <div className="esinferior">
                Cada materia tiene metas de aprendizaje que cumplir a lo largo
                de la gestión académica. Aquí te explicamos cada una a detalle.
              </div>
              <button>
                <a href="/solicitudlicencias">
                  Descargar PDF <MdDownloadForOffline />
                </a>
              </button>
            </div>
            <Atras />
            <br></br>
            <p className="essuperior">
              <h5>
                {" "}
                <strong>Objetivos de diciembre 2023 </strong>
              </h5>
            </p>
            <div className="row cards">
              <div>
                <p>
                  <strong>Objetivo de la unidad</strong>
                </p>
                <p>
                  El objetivo principal de esta unidad es que los lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Nunc vulputate
                  libero et velit interdum, ac aliquet odio mattis. Class aptent
                  taciti sociosqu ad litora torquent per conubia nostra, per
                  inceptos himenaeos. Curabitur tempus urna at turpis
                  condimentum lobortis.
                </p>
              </div>
            </div>
            <div className="row essuperior">
              <div className=" col-12 col-md-6 ">
                <div className="  card ">
                  <div className="card-header text-center   align-items-center">
                    <MdCalculate />
                    <strong>Lógico matemático</strong>
                  </div>
                  <p className="card-body">
                    Realizar conteo secuencial del 1 al 60. Realizar asociación
                    numeral-cantidad hasta el 60. Seguir una secuencia numérica
                    hasta el 60. Realizar secuencias temporales de 5 tarjetas.
                    Realizar seriación con patrón de 4 series.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6   ">
                <div className="  card ">
                  <div className="card-header text-center align-items-center">
                    <FaComments />
                    <strong>Lingüistica</strong>
                  </div>
                  <p className="card-body">
                    Identificar el fonema y grafema de las siguientes letras:
                    J-j, R-r; V-v, G- g. Realizar dictados de palabras sencillas
                    con las consonantes aprendidas. Escritura de sus apellidos,
                    en letra mayúscula.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetasAprendizaje;
