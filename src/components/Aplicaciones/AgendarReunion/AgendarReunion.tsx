import React, { useState } from "react";
import "./AgendarReunion.css";
import usuario from "../../../assets/persona.png";
import {
  MdMail,
  MdArrowBackIosNew,
  MdArrowForward,
  MdSick,
} from "react-icons/md";
import logo from "../../../assets/logo1.svg";
import Atras from "../../Atras";

function AgendarReunion() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <div className="homepage-container agendarreunion">
      <div className="homepage-content">
        <div className="row">
          <div className="col-md-12 col-12">
          <div className="row titular esinferior">
              <div className="d-flex align-items-center">
                <h2 className="ml-2">Agendar reunión</h2>
              </div>
              <div>
              ¿Necesitas conversar con alguno de los profesores de tu hijo? Solicita una reunión llenando el siguiente formulario.
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
                Participantes:
              </label>
              <div className="col-md-6">
                  <div className="card ">
                    <div className="contenidoagen">
                      <div className="row">
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                          <div className="esinferior">
                            <img src={usuario} className="svg-img" />
                          </div>
                        </div>
                        <div className="col-md-9 fontxs" >
                          <strong>Maribel Castillo</strong>
                          <p>
                           Profesora
                          </p>
                          <div className="esinferior">
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 d-flex align-items-center justify-content-center">
                          <div className="esinferior">
                            <img src={usuario} className="svg-img" />
                          </div>
                        </div>
                        <div className="col-md-9 fontxs" >
                          <strong>Predo Picaso</strong>
                          <p>
                           Padre
                          </p>
                          <div className="esinferior">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

            </div>

          <div className="col-md-6 ">
            <div className="form-group">
            <div className="essuperior">
            <label  htmlFor="licencia-desde">
            Categoria:
            <p>Académica</p>
          </label>
            </div>
            </div>
          </div>
        <div className="row">
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
             
              <label htmlFor="licencia-desde " className="essuperior">Licencia desde:</label>
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
               <a href="">Solicitar</a> 
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgendarReunion;
