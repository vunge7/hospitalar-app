import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import logo from '../../assets/images/medico.png';

function Cabecario() {
    return (
        <div style={{ marginBottom: 10 }}>
            <header className="navbar">
                <div className="navbar-logo">
                    <Link to="/main">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                <h2>Sys Hospitalar</h2>
            </header>
        </div>
    );
}

export default Cabecario;
