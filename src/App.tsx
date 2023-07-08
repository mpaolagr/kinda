import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/footer/Footer";
import AppRouter from "./AppRouter";
import Login from "./components/Login/Login";
import Autenticacion from "./components/Login/Autenticacion";

function App() {
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarClosed(!isSidebarClosed);
  };

  return (
<div>
      {location.pathname !== "/login" && location.pathname !== "/autenticacion" && (
        <div className="container-fluid">
        <div className="row d-flex">
          <div
            className={`sidebar ${isSidebarClosed ? "col-md-1 col-lg-1 custom-col-md-1 custom-col-lg-1" : " col-md-2 col-lg-2"} h-100`}
          >
            <Sidebar isSidebarClosed={isSidebarClosed} toggleSidebar={toggleSidebar} />
          </div>
          <div
            className={`homepage ${isSidebarClosed ? "col-12 col-md-11 col-lg-11 custom-offset-md-1 custom-offset-lg-1" : "col-12 col-md-10 col-lg-10 offset-md-2 offset-lg-2"}`}
          >
            <AppRouter />
            <Footer />
          </div>
        </div>
        </div>
      )}
      {location.pathname === "/login" && <Login />}
{location.pathname === "/autenticacion" && <Autenticacion />}
    </div>
  );
}

export default App;
