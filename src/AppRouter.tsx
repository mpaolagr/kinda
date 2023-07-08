import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Homepage/Homepage';
import Estudiante from './components/Estudiante/Estudiante';
import Licencia from './components/Aplicaciones/Licencias/Licencias';
import SolicitudesLicencias from './components/Aplicaciones/SolicitudesLicencias/SolicitudesLicencias';
import Mensajes from './components/Aplicaciones/Mensajes/Mensajes';
import RedactarSMS from './components/Aplicaciones/RedactarSMS/RedactarSMS';
import RendimientoAcad from './components/Aplicaciones/RendimientoAcad/RendimientoAcad';
import RendimientoAcadAño from './components/Aplicaciones/RendimientoAcad/RendimientoAcadAño';
import Kardex from './components/Aplicaciones/Kardex/Kardex';
import Profesores from './components/Aplicaciones/Profesores/Profesores';
import PerfilProfesor from './components/Aplicaciones/Profesores/PerfilProfesor';
import AgendarReunion from './components/Aplicaciones/AgendarReunion/AgendarReunion';
import CalendarioActividades from './components/Aplicaciones/CalendarioActividades/CalendarioActividades';
import Login from './components/Login/Login';
import Autenticacion from './components/Login/Autenticacion';
import PlanificacionA from './components/Aplicaciones/PlanificacionA/PlanificacionA';
import MetasAprendizaje from './components/Aplicaciones/MetasAprendizaje/MetasAprendizaje';
import PlanEstudios from './components/Aplicaciones/PlanEstudios/PlanEstudios';
import CAlendarioAcademico from './components/Aplicaciones/CalendarioAcad/CalendarioAcad';
import PerfilUsuario from './components/Aplicaciones/PerfilUsuario/PerfilUsuario';
import EditarUsuario from './components/Aplicaciones/PerfilUsuario/EditarUsuario';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/estudiante" element={<Estudiante />} />
        <Route path="/licencia" element={<Licencia />} />
        <Route path="/solicitudlicencias" element={<SolicitudesLicencias />} />
        <Route path="/mensajes" element={<Mensajes />} />
        <Route path="/redactarsms" element={<RedactarSMS />} />
        <Route path="/rendimientoacad" element={<RendimientoAcad />} />
        <Route path="/rendimientoacadaño" element={<RendimientoAcadAño />} />
        <Route path="/kardex" element={<Kardex />} />
        <Route path="/profesores" element={<Profesores />} />
        <Route path="/perfilprofesor" element={<PerfilProfesor />} />
        <Route path="/agendarreunion" element={<AgendarReunion />} />
        <Route path="/calendarioactividades" element={<CalendarioActividades />} />
        <Route path="/login" element={<Login />} />
        <Route path="/autenticacion" element={<Autenticacion />} />
        <Route path="/planificacionacademica" element={<PlanificacionA />} />
        <Route path="/metasaprendizaje" element={<MetasAprendizaje />} />
        <Route path="/planestudios" element={<PlanEstudios />} />
        <Route path="/calendarioacademico" element={<CAlendarioAcademico />} />
        <Route path="/perfilusuario" element={<PerfilUsuario />} />
        <Route path="/editarusuario" element={<EditarUsuario />} />
      </Routes>
    </Router>
  ); 
}

export default AppRouter;
