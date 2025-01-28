import React from 'react';
import { Link } from 'react-router-dom';
import './stylePainelPrincipal.css';
import Rodape from '../Rodape';
import Cabecario from '../Cabecario';
//Importação da Biblioteca de Icons
import '@fortawesome/fontawesome-free/css/all.min.css';

function PainelPrincipal() {
    return (
        <div className="painelprincipal">
            <Cabecario />

            <div className="containerpainel">
                <div className="panel">
                    <h2>Processos Clínicos</h2>
                    <div className="grid">
                        <div className="block">
                            <i className="fas fa-sign-in-alt"></i>
                            <p>Admissão</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-box"></i>
                            <p>Módulo - A</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-bed"></i>
                            <p>Enfermaria</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-eye"></i>
                            <p>Sala de Obersavação (SO)</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-procedures"></i>
                            <p>Bloco Operatório</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-user-md"></i>
                            <p>Consultório</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-calendar-alt"></i>
                            <p>Agendamento</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-bell"></i>
                            <p>Notificações</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-cube"></i>
                            <p>Módulo X 1</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-cubes"></i>
                            <p>Módulo X 2</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-layer-group"></i>
                            <p>Módulo X 3</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-th-large"></i>
                            <p>Módulo X 4</p>
                        </div>
                    </div>
                </div>

                <div className="panel">
                    <h2>Processos Administrativos</h2>
                    <div className="grid">
                        <div className="block">
                            <i className="fas fa-file-invoice-dollar"></i>
                            <p>Facturação</p>
                        </div>

                        <div className="block">
                            <i className="fas fa-tools"></i>
                            <p>Serviços</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-users"></i>
                            <p>Usuários</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-warehouse"></i>
                            <p>Stock</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-shopping-cart"></i>
                            <p>Compras</p>
                        </div>

                        <div className="block">
                            <i className="fas fa-briefcase"></i>
                            <p>Recursos Humanos</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-cash-register"></i>
                            <p>Tesouraria</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-calculator"></i>
                            <p>Contabilidade</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-user-tie"></i>
                            <p>Clientes</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-shield-alt"></i>
                            <p>Seguradoras</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-building"></i>
                            <p>Empresas</p>
                        </div>
                        <div className="block">
                            <i className="fas fa-chart-line"></i>
                            <p>Relatórios</p>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape />
        </div>
    );
}

export default PainelPrincipal;
