import { useEffect, useState } from "react";
import "./PerfilUsuario.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo1.svg";
import usuario from "../../../assets/persona.png";
import { MdMail, MdArrowForward, MdGirl, MdBoy, MdTabletMac, MdLocationOn } from "react-icons/md";
import { IoMdBriefcase, IoMdHeart } from "react-icons/io";
import { SlScreenSmartphone } from "react-icons/sl";
import { FaGraduationCap, FaCheckCircle, FaPen } from "react-icons/fa";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoBriefcase } from "react-icons/io5";

function PerfilUsuario() {


  return ( 
    <div className="homepage-container">
      <div className="homepage-content perfilusuario">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Perfil de usuario</h2>
              </div>
              Edita tu información de contacto y agrega la información de
              aquellas personas que gocen de tu confianza, para otorgarles los
              permisos correspondientes como tutor o responsables de recoger a
              tu hijo de nuestro establecimiento educativo.
            </div>

            <div className="row cards bold-text ">
              <div className="col-md-4">
                <div className="card bg-white mb-4">
                  <div className="card-body contenido">
                    <div className="text">
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          src={usuario}
                          alt="Imagen Izquierda"
                          className="svg-img"
                        />
                      </div>

                      <h5 className=" tdo">
                        <span className="iconT">
                          <MdGirl />
                        </span>
                        Madre
                      </h5>
                      <h6 className="mb-1 ms-1 fw-bold">Marilyn Monroe Gómez</h6>
                      <p className="mb-1">
                        <span className="icon">
                          <MdTabletMac />
                        </span>
                        (+591) 77578343
                        <br />
                        <span className="icon">
                          <MdMail />
                        </span>
                        m.monroe@gmail.com
                        <br />
                        <span className="icon">
                          <MdLocationOn />
                        </span>
                        850 B, Vincenti, Santa Cruz
                        <br />
                        <span className="icon">
                          <IoMdBriefcase />
                        </span>
                        Médico en Clínica Alemana
                        <br />
                        <span className="icon">
                          <IoMdHeart />
                        </span>
                        Casada
                      </p>
                    </div>
                    <p className="mb-0">
                      <a href="/editarusuario">
                        Editar información <FaPen />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card bg-white mb-4">
                  <div className="card-body contenido">
                    <div className="text">
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          src={usuario}
                          alt="Imagen Izquierda"
                          className="svg-img"
                        />
                      </div>

                      <h5 className=" tdo">
                        <span className="iconT">
                          <MdGirl />
                        </span>
                        Madre
                      </h5>
                      <h6 className="mb-1 ms-1 fw-bold">Marilyn Monroe Gómez</h6>
                      <p className="mb-1">
                        <span className="icon">
                          <MdTabletMac />
                        </span>
                        (+591) 77578343
                        <br />
                        <span className="icon">
                          <MdMail />
                        </span>
                        m.monroe@gmail.com
                        <br />
                        <span className="icon">
                          <MdLocationOn />
                        </span>
                        850 B, Vincenti, Santa Cruz
                        <br />
                        <span className="icon">
                          <IoMdBriefcase />
                        </span>
                        Médico en Clínica Alemana
                        <br />
                        <span className="icon">
                          <IoMdHeart />
                        </span>
                        Casada
                      </p>
                    </div>
                    <p className="mb-0">
                      <a href="/editarusuario">
                        Editar información <FaPen />
                      </a>
                    </p>
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

export default PerfilUsuario;
