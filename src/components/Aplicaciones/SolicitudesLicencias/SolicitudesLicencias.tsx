import React, { useState } from "react";
import "./SolicitudesLicencias.css";
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
                <h2 className="ml-2">Solicitud de licencia </h2>
              </div>
              <div className="esinferior">
                Para solicitar una licencia o un permiso para tu hijo, debes
                llenar el siguiente formulario y adjuntar el documento que
                justifique su insistencia (por ejemplo: certificado médico,
                pasajes de viaje, etc.).
              </div>
            </div>

           <Atras/>

            <br></br>
          </div>

          <label className="essuperior" htmlFor="licencia-desde">
            Estudiante:
            <p>Juanito Gomez</p>{" "}
          </label>
          <br></br>
          <div className="col-md-6 ">
            <div className="form-group">
              <label htmlFor="licencia-desde">Licencia desde:</label>
              <div className="input-group">
                <input
                  type="date"
                  id="licencia-desde"
                  className="form-control"
                  placeholder="Licencia desde"
                />
                <div className="input-group-append">
                  <span className="input-group-text"></span>
                </div>
              </div>

              <label htmlFor="licencia-desde" className="essuperior">
                Horario:
              </label>
              <div className="input-group">
                <input
                  id="licencia-desde"
                  className="form-control"
                  placeholder="Licencia desde"
                />
                <div className="input-group-append">
                  <span className="input-group-text"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="licencia-desde">Licencia desde:</label>
              <div className="input-group">
                <input
                  type="date"
                  id="licencia-desde"
                  className="form-control"
                  placeholder="Licencia desde"
                />
                <div className="input-group-append">
                  <span className="input-group-text"></span>
                </div>
              </div>

              <label htmlFor="licencia-desde" className="essuperior">
                Motivo:
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
          <div className="row">
            <label htmlFor="licencia-desde" className="essuperior">
              Motivo:
            </label>
            <div className="input-group">
              <input
                id="licencia-desde"
                className="form-control"
                placeholder="Licencia desde"
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolicitudesLicencias;
