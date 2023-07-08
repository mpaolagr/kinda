import React, { useState } from "react";
import "./Sidebar.css";
import { FaLessThan, FaGreaterThan,FaUserCircle, FaHome} from "react-icons/fa";
import logo from "../assets/logo2.svg";
import kinda from "../assets/kinda.svg";
import { MdMail, MdHelp } from "react-icons/md";
import { IoCalendarOutline} from "react-icons/io5";


interface SidebarProps {
  isSidebarClosed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarClosed,
  toggleSidebar,
}) => {
  const [isImageVisible, setIsImageVisible] = useState(true);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const handleSubmenuToggle = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };
  
  const handleToggle = () => {
    toggleSidebar();
    setIsImageVisible(!isImageVisible);
  };

  const getActiveClass = (path: string) => {
    const currentPath = window.location.pathname;
    return currentPath === path ? "active" : "";
  };

  return (
    <nav className={`sidebar ${isSidebarClosed ? "close" : ""}`}>
      <header>
        <div className={`logokinda ${isSidebarClosed ? "hidden" : ""}`}>
          <img src={logo} className="logo" />
          <img src={kinda} className="logo" />
        </div>
        <div
          className={`toggle-button ${isSidebarClosed ? "closed" : ""}`}
          onClick={handleToggle}
        >
          {isSidebarClosed ? <FaGreaterThan /> : <FaLessThan />}
        </div>
      </header>
      <div className={`menu-bar ${isSidebarClosed ? "centered" : ""}`}>
        <div className="menu">
          <ul className="menu-links nav nav-list">
          <li className={`nav-link ${getActiveClass("/")}`}>
            <a href="/">
             {/*<div className="React-nad">
                <h1>Pruebas</h1>
                <div className="row">
                  <div className="col-md-12 col-12">
                    <span><a href="/estudiante"></a></span>
                     </div>
                  </div> </div>*/ } 
              <span
                className={`icon-wrapper ${
                  isSidebarClosed ? "hide" : ""
                } icon-large ${getActiveClass("/")}`}
              >
                <FaHome />
              </span>
              <span
                className={`text ${isSidebarClosed ? "hide" : ""} ${
                  getActiveClass("/")
                }`}
                onClick={handleSubmenuToggle}
              >
                Inicio
                <span className="submenu-toggle-icon">
                  {isSubmenuOpen ? <FaLessThan /> : <FaGreaterThan />}
                </span>
              </span>
            </a>
            {isSubmenuOpen && (
              <ul className="submenu-links">
                <li className={`nav-link ${getActiveClass("/submenu1")}`}>
                  <a href="/submenu1">
                    <span
                      className={`icon-wrapper ${
                        isSidebarClosed ? "hide" : ""
                      } icon-large ${getActiveClass("/submenu1")}`}
                    >
                    </span>
                    <span
                      className={`text ${isSidebarClosed ? "hide" : ""} ${
                        getActiveClass("/submenu1")
                      }`}
                    >
                      Submenu 1
                    </span>
                  </a>
                </li>
                <li className={`nav-link ${getActiveClass("/submenu2")}`}>
                  <a href="/submenu2">
                    <span
                      className={`icon-wrapper ${
                        isSidebarClosed ? "hide" : ""
                      } icon-large ${getActiveClass("/submenu2")}`}
                    >
                    </span>
                    <span
                      className={`text ${isSidebarClosed ? "hide" : ""} ${
                        getActiveClass("/submenu2")
                      }`}
                    >
                      Submenu 2
                    </span>
                  </a>
                </li>
              </ul>
            )}
          </li>
            <li className={`nav-link ${getActiveClass("/perfil")}`}>
              <a href="/perfil">
                <span
                  className={`icon-wrapper ${
                    isSidebarClosed ? "hide" : ""
                  } icon-large ${getActiveClass("/perfil")}`}
                >
                  <FaUserCircle />
                </span>
                <span
                  className={`text ${isSidebarClosed ? "hide" : ""} ${
                    getActiveClass("/perfil")
                  }`}
                >
                  Mi cuenta
                </span>
              </a>
            </li>
            <li className={`nav-link ${getActiveClass("/mensajes")}`}>
              <a href="/mensajes">
                <span
                  className={`icon-wrapper ${
                    isSidebarClosed ? "hide" : ""
                  } icon-large ${getActiveClass("/mensajes")}`}
                >
                  <MdMail />
                </span>
                <span
                  className={`text ${isSidebarClosed ? "hide" : ""} ${
                    getActiveClass("/mensajes")
                  }`}
                >
                  Buzón de mensajes
                </span>
              </a>
            </li>
            <li className={`nav-link ${getActiveClass("/calendarioactividades")}`}>
              <a href="/calendarioactividades">
                <span
                  className={`icon-wrapper ${
                    isSidebarClosed ? "hide" : ""
                  } icon-large ${getActiveClass("/calendarioactividades")}`}
                >
                  <IoCalendarOutline />
                </span>
                <span
                  className={`text ${isSidebarClosed ? "hide" : ""} ${
                    getActiveClass("/calendarioactividades")
                  }`}
                >
                  Calendario de actividades
                </span>
              </a>
            </li>
            <li className={`nav-link ${getActiveClass("/perfil")}`}>
              <a href="/perfil">
                <span
                  className={`icon-wrapper ${
                    isSidebarClosed ? "hide" : ""
                  } icon-large ${getActiveClass("/perfil")}`}
                >
                  <MdHelp />
                </span>
                <span
                  className={`text ${isSidebarClosed ? "hide" : ""} ${
                    getActiveClass("/perfil")
                  }`}
                >
                  Recursos
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="rec"></div>
    </nav>
  );
};

export default Sidebar;
