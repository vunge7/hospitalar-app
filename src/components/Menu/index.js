import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
// import { Container } from './styles';

function Menu() {
    return (
        <ul className="item menu-vertical">
            <li>
                <Link to="/lancamento">Lançamentos</Link>
            </li>
            <li>
                <Link to="/relatorio">Relatorios</Link>
            </li>
            <li>
                <Link to="#services">Igrejas</Link>
            </li>
            <li>
                <Link to="#contact">Distritos</Link>
            </li>
            <li>
                <Link to="#contact">Regiões</Link>
            </li>
            <li>
                <Link to="#contact">Tabelas</Link>
            </li>
        </ul>
    );
}

export default Menu;
