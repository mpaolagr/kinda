import React, { useState } from "react";
import "./Estudiante.css";
import usuario from "../../assets/persona.png";
import { Link, useNavigate } from 'react-router-dom';
import { MdMail, MdArrowBackIosNew, MdArrowForward } from "react-icons/md";
import { IoCalendarOutline, IoPeopleOutline } from "react-icons/io5";
import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import logo from "../../assets/logo1.svg";
import Atras from "../Atras";
function Estudiante() {
  const [showBadge, setShowBadge] = useState(true);
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1); 
  };
  return (
    <div className="homepage-container">
      <div className="homepage-content estudiante">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Juanito Gomez</h2>
              </div>
              A continuación, te compartimos toda la información que necesitas
              para hacer seguimiento al desempeño de tu hijo.
            </div>
           <Atras/>
            <br></br>
            <div className="row cards bold-text ">
            <div className="col-md-4">
                <div className="card bg-white mb-4">
                  <div className="card-body contenido">
                    <div className="esinferior">
                      <strong>
                        <span
                          className={`icon icono-svg ${
                            showBadge ? "icon-badge" : ""
                          }`}
                        >
                          <MdMail />
                        </span>
                        <h4>Licencias</h4>
                      </strong>
                    </div>
                    <div className="esinferior">
                      <p className="text">
                        Te invitamos a gestionar las licencias y permisos de tu
                        hijo, completando los formularios correspondientes.
                      </p>
                    </div>
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
                <div className="card bg-white mb-4">
                  <div className="card-body contenido">
                    <div className="esinferior">
                      <strong>
                        <span
                          className={`icon icono-svg ${
                            showBadge ? "icon-badge" : ""
                          }`}
                        >
                          <MdMail />
                        </span>
                        <h4>Mensajes</h4>
                      </strong>
                    </div>
                    <div className="esinferior">
                    <p className="text">
                      ¿Tienes alguna consulta o comentario? Puedes contactarte directamente con nosotros siempre que lo requieras.
                      </p>
                    </div>
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
                          className={`icon icono-svg ${
                            showBadge ? "icon-badge" : ""
                          }`}
                        >
                          <MdMail />
                        </span>
                        <h4>Rendimiento Académico</h4>
                      </strong>
                    </div>
                    <div className="esinferior">
                    <p className="text">
                        Aquí encontrarás el Boletín de Calificaciones que reúne todas las notas obtenidas en las evaluaciones trimestrales y finales.
                      </p>
                    </div>
                    <div className="esinferior">
                      <p>
                        <strong>
                          <a href="/rendimientoacad">
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
                          className={`icon icono-svg ${
                            showBadge ? "icon-badge" : ""
                          }`}
                        >
                          <MdMail />
                        </span>
                        <h4>Planificación académica</h4>
                      </strong>
                    </div>
                    <div className="esinferior">
                    <p className="text">
                      Podrás conocer los alcances de nuestro plan de estudios y las metas de aprendizaje que perseguimos en cada instancia.
                      </p>
                    </div>
                    <div className="esinferior">
                      <p>
                        <strong>
                          <a href="/planificacionacademica">
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
                          className={`icon icono-svg ${
                            showBadge ? "icon-badge" : ""
                          }`}
                        >
                          <MdMail />
                        </span>
                        <h4>Kardex</h4>
                      </strong>
                    </div>
                    <div className="esinferior">
                    <p className="text">
                      Puedes verificar la documentación de tu hijo. Todas las copias de sus documentos, reunidos en un solo lugar.
                      </p>
                    </div>
                    <div className="esinferior">
                      <p>
                        <strong>
                          <a href="/kardex">
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
                          className={`icon icono-svg ${
                            showBadge ? "icon-badge" : ""
                          }`}
                        >
                          <MdMail />
                        </span>
                        <h4>Profesores</h4>
                      </strong>
                    </div>
                    <div className="esinferior">
                    <p className="text">
                      Conoce a todos los profesores que están a cargo de la formación de tu hijo y ponte en contacto con cualquiera de ellos, siempre que lo requieras.
                      </p>
                    </div>
                    <div className="esinferior">
                      <p>
                        <strong>
                          <a href="/profesores">
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

export default Estudiante;
