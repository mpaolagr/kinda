import { useEffect, useState } from 'react';
import axios from 'axios';
import "./Homepage.css";
import { Link } from 'react-router-dom';
import usuario from "../../assets/persona.png";
import logo from "../../assets/logo1.svg";
import Estudiante from "../Estudiante/Estudiante";
import { MdMail, MdArrowForward } from "react-icons/md";
import { IoCalendarOutline, IoPeopleOutline } from "react-icons/io5";
import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings: Settings = {
  dots: true, // Mostrar puntos de navegación
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  arrows: true,
  className: "slider",
};

function Homepage() {
 /* const [usuarios, setUsuarios] = useState([]);

useEffect(() => {
  const fetchUsuarios = async () => {
    try {
      const response = await axios.get('https://cognos-desarrollo.com/api/public/api/usuario/1');
      setUsuarios(response.data);
    } catch (error) {
      console.error('Error al obtener los usuarios:', error);
    }
  };

  fetchUsuarios();
}, []);

console.log(usuarios);*/

  const [showBadge, setShowBadge] = useState(true);

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="row">
          <div className="col-md-9 col-12">
            <div className="row titular">

            <div className="d-flex align-items-center">
      <img src={usuario} className="svg-img" />
      <h2 className="ml-2">Hola marilyn! Que gusto verte aquí</h2>
    </div>

                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five

            </div>
            
            <br></br>
            <div className="row cards">
              <div className="col-md-6">
                <div className="card bg-white mb-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={usuario}
                        alt="Imagen Izquierda"
                        className="svg-img"
                      />
                      <img
                        src={logo}
                        alt="Imagen Derecha"
                        className="svg-img"
                      />
                    </div>
                    <br></br>
                    <strong>
                      {" "}
                      <p>Nombre Estudiante</p>
                    </strong>
                    <p>
                      <span className="icon">
                        <FaGraduationCap />
                      </span>{" "}
                      4to A - Mañana
                      <br />
                      <span className={`icon ${showBadge ? "icon-badge" : ""}`}>
                        <MdMail />
                      </span>{" "}
                      3 <br />
                      <span className="icon">
                        <FaCheckCircle />
                      </span>{" "}
                      Pago al día
                      <br />
                    </p>
                    <p>
                      <strong>
                        {" "}
                        <a href="ruta-a-otra-pagina">
                          Ver más <MdArrowForward />
                        </a>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card bg-white mb-4">
                  <div className="card-body home">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={usuario}
                        alt="Imagen Izquierda"
                        className="svg-img"
                      />
                      <img
                        src={logo}
                        alt="Imagen Derecha"
                        className="svg-img"
                      />
                    </div>
                    <br></br>
                    <strong>
                      <p>Nombre Estudiante</p>
                    </strong>
                    <p>
                      <span className="icon">
                        <FaGraduationCap />
                      </span>
                      4to A - Mañana
                      <br />
                      <span className={`icon ${showBadge ? "icon-badge" : ""}`}>
                        <MdMail />
                      </span>
                      3 <br />
                      <span className="icon">
                        <FaCheckCircle />
                      </span>
                      Pago al día
                      <br />
                    </p>
                    <p>
                      <strong>
                        
                        <a href="/Estudiante">
                          Ver más <MdArrowForward />
                        </a>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card bg-white mb-4">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center">
                      <img
                        src={usuario}
                        alt="Imagen Izquierda"
                        className="svg-img"
                      />
                      <img
                        src={logo}
                        alt="Imagen Derecha"
                        className="svg-img"
                      />
                    </div>
                    <br></br>
                    <strong>
                      <p>Nombre Estudiante</p>
                    </strong>
                    <p>
                      <span className="icon">
                        <FaGraduationCap />
                      </span>
                      4to A - Mañana
                      <br />
                      <span className={`icon ${showBadge ? "icon-badge" : ""}`}>
                        <MdMail />
                      </span>
                      3 <br />
                      <span className="icon">
                        <FaCheckCircle />
                      </span>
                      Pago al día
                      <br />
                    </p>
                    <p>
                      <strong>
                        <a href="ruta-a-otra-pagina">
                          Ver más <MdArrowForward />
                        </a>
                      </strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 panel3">
            <span>
              <IoPeopleOutline className="icon" />
            </span>
            <span className="txtmed">Próxima Reunión</span>
            <br></br>
            <br></br>
            <span>
              <img src={usuario} />
            </span>
            <span className="txts">Reunión Prof.Matematicas</span>
            <p></p>
            <p>Zoom</p>
            <p>Miercoles 3 de Noviembre, 14:00</p>
            <p>
              <strong>
                <a href="ruta-a-otra-pagina">
                  Ver detalles <MdArrowForward />
                </a>
              </strong>
            </p>
            <br></br>

            
            <div className="panel3.1">
              <Slider
                {...settings}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                arrows={true}
                className="slider"
              >
                {/* Primer elemento del slider */}
                <div>
                  <span>
                    <IoCalendarOutline className="icon" />
                  </span>
                  <span className="txtmed">Próximos eventos</span>
                  <p></p>
                  <span className="txts">Despedida Promoción 2023</span>
                  <p></p>
                  <p>Zoom</p>
                  <p>Miercoles 3 de Noviembre, 14:00</p>
                  <strong>
                    <a href="ruta-a-otra-pagina">
                      Ver calendario de actividades <MdArrowForward />
                    </a>
                  </strong>
                </div>

                <div>
                  <span>
                    <IoCalendarOutline className="icon" />
                  </span>
                  <span className="txtmed">Próxima Reunión</span>

                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
