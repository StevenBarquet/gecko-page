import React from 'react'
import logow from '../imagenes/logow.png'
import NavButton from './utils/NavButton'
const Menu = (props) => (
    <nav id='menu'>
        <div className="menu_container">
            <div className="logo_container">
                <img src={logow} alt='ssaas' width="180px"/>
            </div>
            <NavButton 
                styles="nav-buttons" 
                label='Inicio'
                url="/"/>
            <NavButton 
                styles="nav-buttons" 
                label='Servicios'
                url="/tareas"/>
            <NavButton 
                styles="nav-buttons" 
                label='¿Sabias que...?'
                url="/sabias"/>
        </div>
    </nav>
);

export default Menu;