import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import "./Mensajes.css";
import usuario from "../../../assets/persona.png";
import { MdMail, MdArrowBackIosNew, MdArrowForward } from "react-icons/md";
import { IoCalendarOutline, IoPeopleOutline } from "react-icons/io5";
import { FaPen, FaCheckCircle } from "react-icons/fa";
import logo from "../../../assets/logo1.svg";
import Atras from "../../Atras";

interface Message {
  id: number;
  checkbox: JSX.Element;
  userImage: string;
  iconText: JSX.Element;
  status: string;
  boldText: string;
  text: string;
  starIcon: JSX.Element;
  trashIcon: JSX.Element;
}

const recibidos: Message[] = [
  {
    id: 1,
    checkbox: <input type="checkbox" />,
    userImage: usuario,
    iconText: <MdMail />,
    status: "pendiente",
    boldText: "Mensaje recibido",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    starIcon: <FaPen />,
    trashIcon: <MdArrowBackIosNew />,
  },
  // Aquí puedes agregar más mensajes
];

const enviados: Message[] = [
  {
    id: 1,
    checkbox: <input type="checkbox" />,
    userImage: usuario,
    iconText: <MdMail />,
    status: "finalizado",
    boldText: "Mensaje enviado",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    starIcon: <FaCheckCircle />,
    trashIcon: <MdArrowForward />,
  },
  // Aquí puedes agregar más mensajes
];

const favoritos: Message[] = [
  {
    id: 1,
    checkbox: <input type="checkbox" />,
    userImage: usuario,
    iconText: <MdMail />,
    status: "pendiente",
    boldText: "Mensaje favorito",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    starIcon: <FaPen />,
    trashIcon: <MdArrowBackIosNew />,
  },
  // Aquí puedes agregar más mensajes
];

enum Tab {
  Recibidos,
  Enviados,
  Favoritos,
}

function Mensajes() {
  const [activeTab, setActiveTab] = useState(Tab.Recibidos);

  const columns = useMemo(
    () => [
      {
        Header: "",
        accessor: "checkbox",
      },
      {
        Header: "",
        accessor: "userImage",
      },
      {
        Header: "",
        accessor: "iconText",
      },
      {
        Header: "",
        accessor: "status",
      },
      {
        Header: "",
        accessor: "boldText",
      },
      {
        Header: "",
        accessor: "text",
      },
      {
        Header: "",
        accessor: "starIcon",
      },
      {
        Header: "",
        accessor: "trashIcon",
      },
    ],
    []
  );

  const data = useMemo(() => {
    switch (activeTab) {
      case Tab.Recibidos:
        return recibidos;
      case Tab.Enviados:
        return enviados;
      case Tab.Favoritos:
        return favoritos;
      default:
        return [];
    }
  }, [activeTab]);

  const tableInstance = useTable({ columns, data });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Buzón de mensajes</h2>
              </div>
              <div className="esinferior">
                Envía y recibe mensajes de forma organizada para mantenerte en
                contacto con nosotros. Puedes hacernos todas las consultas que
                necesites.
              </div>
              <button>
               <a href="/redactarsms">Solicitar licencia <FaPen/></a> 
              </button>
            </div>
            <Atras />
            <br></br>
            <ul className="nav nav-tabs mt-4" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === Tab.Recibidos ? "active" : ""
                  }`}
                  id="recibidos-tab"
                  onClick={() => handleTabChange(Tab.Recibidos)}
                >
                  Recibidos
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === Tab.Enviados ? "active" : ""
                  }`}
                  id="enviados-tab"
                  onClick={() => handleTabChange(Tab.Enviados)}
                >
                  Enviados
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    activeTab === Tab.Favoritos ? "active" : ""
                  }`}
                  id="favoritos-tab"
                  onClick={() => handleTabChange(Tab.Favoritos)}
                >
                  Favoritos
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className={`tab-pane fade ${
                  activeTab === Tab.Recibidos ? "show active" : ""
                }`}
                id="recibidos"
              >
                    <table {...getTableProps()} className="table table-borderless">
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        if (cell.column.id === "userImage") {
                          // Renderizar la imagen del usuario
                          return (
                            <td {...cell.getCellProps()}>
                              <img src={cell.value} alt="Usuario" className="user-image-table" />
                            </td>
                          );
                        } else {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
            </table>
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === Tab.Enviados ? "show active" : ""
                }`}
                id="enviados"
              >
                
                {/* Renderizar la tabla para la pestaña de enviados */}
              </div>
              <div
                className={`tab-pane fade ${
                  activeTab === Tab.Favoritos ? "show active" : ""
                }`}
                id="favoritos"
              >
                {/* Renderizar la tabla para la pestaña de favoritos */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mensajes;
