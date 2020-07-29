import React from 'react';
import Logo from '../../assets/img/Logo.gif';
import './Menu.css';
import Button from "../Button";
//import ButtonLink from './components/ButtonLink';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Logo Friday" />
            </a>

            <Button as="a" className="Button" href="/">
                Novo Vídeo
            </Button>
        </nav>
    );
}


export default Menu;