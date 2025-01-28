import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import PainelAdministrativo from '../pages/PainelAdministrativo';
import PainelEnfermeiro from '../pages/PainelEnfermeiro';
import PainelMedico from '../pages/PainelMedico';
import Paciente from '../components/Paciente';
import Triagem from '../components/Enfermeiro/Triagem';
import Consulta from '../components/Medico/Consulta';
import Private from '../contexts/Private';
import Dashboard from '../components/Dashboard';
import DashboardMedico from '../components/Medico/DashboardMedico';
import TriagemManchester from '../components/TriagemManchester';
import TextToSpeech from '../components/TextToSpeech';
import Test from '../components/Test';
import PainelPrincipal from '../components/PainelPrincipal';

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/tts" element={<TextToSpeech />} />
            <Route path="/teste" element={<Test />} />
            <Route path="/tm" element={<TriagemManchester />} />
            <Route path="/home" element={<PainelAdministrativo />} />

            <Route
                path="/admin"
                element={
                    <Private>
                        <PainelPrincipal />
                    </Private>
                }
            />

            <Route
                path="/admin/dashboard"
                element={
                    <Private>
                        <PainelAdministrativo page="admin">
                            <Dashboard />
                        </PainelAdministrativo>
                    </Private>
                }
            />
            <Route
                path="/admin/paciente"
                element={
                    <Private>
                        <PainelAdministrativo page="admin">
                            <Paciente />
                        </PainelAdministrativo>
                    </Private>
                }
            />

            <Route
                path="/enf"
                element={
                    <Private>
                        <PainelEnfermeiro />
                    </Private>
                }
            />

            <Route
                path="/enf/triagem"
                element={
                    <Private>
                        <PainelEnfermeiro>
                            <Triagem />
                        </PainelEnfermeiro>
                    </Private>
                }
            />

            <Route
                path="/medico/home"
                element={
                    <Private>
                        <PainelMedico>
                            <DashboardMedico />
                        </PainelMedico>
                    </Private>
                }
            />

            <Route
                path="/medico/consulta"
                element={
                    <Private>
                        <PainelMedico>
                            <Consulta />
                        </PainelMedico>
                    </Private>
                }
            />
            <Route path="*" element={<div>Página não existente</div>} />
        </Routes>
    );
}
export default RoutesApp;
