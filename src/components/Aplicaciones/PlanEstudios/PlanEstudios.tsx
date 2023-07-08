import React, { useState } from "react";
import "./PlanEstudios.css";
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
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
function PlanEstudios() {
  return (
    <div className="homepage-container planestu">
      <div className="homepage-content">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Plan de estudios</h2>
              </div>
              <div className="esinferior">
                Conoce qué se avanzará en cada materia y en cada trimestre. Así
                podrás hacer seguimiento a la evolución del aprendizaje de tu
                hijo.
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
                <strong>Gestión 2022 - 4to de Secundaria</strong>
              </h5>
              <label>
                Selecciona un área para ver el plan de estudio de esa materia.
              </label>
            </p>
            <div className="d-none d-md-block">
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab
                  eventKey="home"
                  title={
                    <>
                      <MdCalculate /> Lógico matemático
                    </>
                  }
                >
                  <div className="row essuperior">
                    <div className=" col-12 col-md-6 ">
                      <div className="  card ">
                        <div className="card-header text-center   align-items-center">
                          <strong>Lingüistica 4to</strong>
                        </div>
                        <p className="card-body">
                          Aplicar palabras polisémicas y palabras compuestas de
                          acuerdo a su significado. Desarrollar biografías y
                          autobiografías, trabajando la producción escrita de un
                          texto Aprender y recordar abreviaturas de las palabras
                          y las siglas.
                        </p>
                      </div>
                      <Table striped bordered hover>
                        <thead className="text-center">
                          <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </Tab>
                <Tab
                  eventKey="profile"
                  title={
                    <>
                      <FaComments /> Lingüistica
                    </>
                  }
                >
                  Tab content for Profile
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanEstudios;
