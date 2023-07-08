import React, { useState } from "react";
import "./CalendarioActividades.css";
import usuario from "../../../assets/persona.png";
import { FaGraduationCap, FaCheckCircle, FaPen } from "react-icons/fa";
import Atras from "../../Atras";
import "moment/locale/es";
import { Calendar, momentLocalizer, Event } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "moment/locale/es";
moment.locale("es");
import Modal from 'react-modal';

function CalendarioActividades() {
  const [events, setEvents] = useState<Event[]>([
    {
      title: "Reunión de equipo",
      start: new Date(2023, 5, 25, 10, 0), // Año, mes (0-11), día, hora, minuto
      end: new Date(2023, 5, 25, 12, 0),
    },
    {
      title: "Examen final",
      start: new Date(2023, 5, 28, 14, 30),
      end: new Date(2023, 5, 28, 16, 0),
    },
  ]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  const localizer = momentLocalizer(moment);
  const messages = {
    allDay: "Todo el día",
    previous: "<",
    next: ">",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    weekdays: [
      { abbr: "Dom", label: "Domingo" },
      { abbr: "Lun", label: "Lunes" },
      { abbr: "Mar", label: "Martes" },
      { abbr: "Mié", label: "Miércoles" },
      { abbr: "Jue", label: "Jueves" },
      { abbr: "Vie", label: "Viernes" },
      { abbr: "Sáb", label: "Sábado" },
    ],
  };

  // Resto del código...

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="row titular esinferior">
              <div className="d-flex align-items-center esinferior">
                <img src={usuario} className="svg-img" />
                <h2 className="ml-2">Calendario de actividades</h2>
              </div>
              <div className="esinferior">
                Para una mejor organización, todas nuestras actividades se
                encuentran agendadas en este calendario. Aquí encontrarás la
                programación de exámenes, festividades, feriados y otros
                eventos. Y lo más importante, podrás agendar tus propias
                reuniones.
              </div>
              <button>
                <a href="/solicitudlicencias">
                  Solicitar reunión <FaPen />
                </a>
              </button>
            </div>

            <Atras />

            <br></br>

            {/*CALENDARIO*/}
            <Calendar
              localizer={localizer}
              events={events}
              startAccessor="start"
              endAccessor="end"
              style={{ height: "70vh" }}
              messages={messages}
              culture={"ES"}
              onSelectEvent={openModal}
            />
             <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <form>
          <label>hola</label>
        </form>
      </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarioActividades;
