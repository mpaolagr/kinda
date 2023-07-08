import React, { useState } from "react";
import "./RedactarSMS.css";
import usuario from "../../../assets/persona.png";
import {
  MdMail,
  MdArrowBackIosNew,
  MdArrowForward,
  MdSick,
} from "react-icons/md";
import logo from "../../../assets/logo1.svg";
import Atras from "../../Atras";

function SolicitudesLicencias() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Redactar Mensaje</h2>
              </div>
            </div>

           <Atras/>
            <br></br>
          </div>

          <div className="col-md-6 ">
            <div className="essuperior">
            <label  htmlFor="licencia-desde">
            Estudiante:
            <p>Juanito Gomez</p>{" "}
          </label>
            </div><br></br>
            <label htmlFor="licencia-desde" >
                Titulo del Mensaje:
              </label>
              <div className="input-group">
                <input
                  id="licencia-desde"
                  className="form-control"
                  placeholder="Escribe aqui"
                />
                <div className="input-group-append">
                  <span className="input-group-text"></span>
                </div>
              </div>

            </div>

          <div className="col-md-6 ">
            <div className="form-group">
              <label htmlFor="licencia-desde" className="essuperior">
                Categoria del Mensaje:
              </label>
              <div className="input-group">
                <select id="licencia-desde" className="form-control">
                  <option value="">Seleccionar una opción</option>
                  <option value="opcion1">Opción 1</option>
                  <option value="opcion2">Opción 2</option>
                  <option value="opcion3">Opción 3</option>
                </select>
                <div className="input-group-append">
                  <span className="input-group-text"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row redactarboton">
            <label htmlFor="licencia-desde" className="essuperior">
              Motivo:
            </label>
            <div className="input-group">
              <input
                id="licencia-desde"
                className="form-control"
                placeholder="Escribe aqui"
                />
              <div className="input-group-append">
                <span className="input-group-text"></span>
              </div>
            </div>
            <p>
              <label htmlFor="adjuntar-documento" className="essuperior">
                Adjunta un comprobante Opcional:
              </label>
              <p>
                <input
                  className="adjunto"
                  type="file"
                  id="adjuntar-documento"
                  onChange={handleFileChange}
                />
              </p>
            </p>

            <button>
               <a href="">Enviar</a> 
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolicitudesLicencias;
