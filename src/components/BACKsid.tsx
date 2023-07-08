import React, { useState } from "react";
import "./Sidebar.css";
import { RiUserLine, RiHome4Line } from "react-icons/ri";
import { FaLessThan, FaGreaterThan,FaUserCircle, FaHome} from "react-icons/fa";
import logo from "../assets/logo2.svg";
import kinda from "../assets/kinda.svg";
import { MdMail, MdHelp } from "react-icons/md";
import { IoCalendarOutline} from "react-icons/io5";
import { NavLink } from "react-router-dom";
interface SidebarProps {
  isSidebarClosed: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isSidebarClosed,
  toggleSidebar,
}) => {
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleToggle = () => {
    toggleSidebar();
    setIsImageVisible(!isImageVisible);
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
          
          <ul className="menu-links">
            <li className="nav-link">
              
              <span
                className={`icon-wrapper ${
                  isSidebarClosed ? "hide" : ""
                } icon-large`}
              >
                <FaHome />
              </span>
              <span className={`text ${isSidebarClosed ? "hide" : ""}`}>
                Inicio
              </span>
            </li>
            <li className="nav-link">
              <span
                className={`icon-wrapper ${
                  isSidebarClosed ? "hide" : ""
                } icon-large`}
              >
                <FaUserCircle />
              </span>
              <span className={`text ${isSidebarClosed ? "hide" : ""}`}>
                Mi cuenta
              </span>
            </li>
            <li className="nav-link">
              <span
                className={`icon-wrapper ${
                  isSidebarClosed ? "hide" : ""
                } icon-large`}
              >
                <MdMail />
              </span>
              <span className={`text ${isSidebarClosed ? "hide" : ""}`}>
                Buzón de Mensajes
              </span>
            </li>
            <li className="nav-link">
              <span
                className={`icon-wrapper ${
                  isSidebarClosed ? "hide" : ""
                } icon-large`}
              >
                <IoCalendarOutline />
              </span>
              <span className={`text ${isSidebarClosed ? "hide" : ""}`}>
                Calendario de Actividades
              </span>
            </li>
            <li className="nav-link">
              <span
                className={`icon-wrapper ${
                  isSidebarClosed ? "hide" : ""
                } icon-large`}
              >
                <MdHelp />
              </span>
              <span className={`text ${isSidebarClosed ? "hide" : ""}`}>
                Recursos
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="rec"></div>
    </nav>
  ); 
};
export default Sidebar;