import React, { useState } from "react";
import "./CalendarioAcad.css";
import usuario from "../../../assets/persona.png";
import {
  MdMail,
  MdArrowBackIosNew,
  MdDownloadForOffline,
  MdArrowForward,
  MdSick,
} from "react-icons/md";
import { IoCalendarOutline, IoPeopleOutline } from "react-icons/io5";
import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import logo from "../../assets/logo1.svg";
import { useTable } from "react-table";
import Atras from "../../Atras";

function CalendarioAcademico() {
  const data = React.useMemo(
    () => [
      { id: 1, nombre: "Licencia 1", fecha: "2023-06-10" },
      { id: 2, nombre: "Licencia 2", fecha: "2023-06-11" },
      // ... otros datos
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Nombre", accessor: "nombre" },
      { Header: "Fecha", accessor: "fecha" },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="row">
          <div className="col-md-12 col-12">
          <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Calendario académico</h2>
              </div>
              <div className="esinferior">
              Toma nota de las fechas importantes. Nuestro calendario reúne la programación de capacitaciones, evaluaciones, festividades y feriados.
              </div>
              <button>
                <a href="/solicitudlicencias">
                  Descargar PDF <MdDownloadForOffline />
                </a>
              </button>
            </div>
           <Atras/>
            <br></br>
            <p className="essuperior">
              <h5>
                <strong>Gestión 2022 Golden Lion:</strong>
              </h5>
            </p>
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
            </div>  
            </div>
            <div className="col-md-6 ">
          <div className="form-group">    
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
        </div>







            <div className="row essuperior">
              <table {...getTableProps()} className="table">
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarioAcademico;
