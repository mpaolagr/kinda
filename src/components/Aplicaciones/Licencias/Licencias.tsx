import React, { useState } from "react";
import "./Licencias.css";
import usuario from "../../../assets/persona.png";
import {
  MdMail,
  MdArrowBackIosNew,
  MdArrowForward,
  MdSick,
} from "react-icons/md";
import { IoCalendarOutline, IoPeopleOutline } from "react-icons/io5";
import { FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import logo from "../../assets/logo1.svg";
import { useTable } from "react-table";
import Atras from "../../Atras";

function Licencias() {
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
                <h2 className="ml-2">Licencias</h2>
              </div>
              <div className="esinferior">
                {" "}
                Si a tu hijo se le presenta algún inconveniente que no le
                permita cumplir con la asistencia a clases, deberás solicitar la
                licencia o permiso correspondientes, con la debida
                justificación. El estado de tu solicitud se mostrará en el
                siguiente historial como aprobada, rechazada o pendiente.
              </div>
              <button>
               <a href="/solicitudlicencias">Solicitar licencia <MdSick /></a> 
              </button>
            </div>

           <Atras/>

            <br></br>

            <div className="row essuperior">
              <h4 className="esinferior">Historial de licencias:</h4>
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

export default Licencias;
