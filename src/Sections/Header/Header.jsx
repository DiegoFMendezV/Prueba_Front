/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { FaBars, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import './Header.css'

function Header() {
    const [ menu , setMenu ] = useState (false)
    const toggleMenu = () => {
        setMenu(!menu)
    } 
    return (
        <body>
            <nav>
                <div>
                    <img src="images/logo.jpg" alt="" />
                </div>
                <div className={ `responsive ${ menu ? 'isActive' : '' }` }>
                    <div className="items">
                        <a href="#">Nuestros Servicios</a>
                        <a href="#">Proyectos</a>
                        <a href="#">Equipo</a>
                        <a href="#">Contáctanos</a>
                    </div>
                    <div className="languages">
                        <a href="#">Inglés</a>
                        <span>/</span>
                        <a href="#">Español</a>
                    </div>
                    <div className="boton_wp">
                        <a href="#" className="contact">Contáctanos</a>
                        <img className="image_wp" src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png" alt="" />
                    </div>
                </div>
                <div onClick={toggleMenu} className="menu">
                    <FaBars/>
                </div>
            </nav>
            <div className="titles">
                <h3>WEBSITE - APPS - BRANDING</h3>
                <h1>Creativity</h1>
            </div>
            <div className='left'>
                <FaAngleLeft/>
            </div>
            <div className='right'>
                <FaAngleRight/>
            </div>
            <div className="images">
                <img id="id" src="images/ID.png" alt="" />
                <img id="shooting" src="images/SHOOTING.png" alt="" />
                <img id="clothe" src="images/CLOTHE.png" alt="" />
                <img id="edit" src="images/EDIT.png" alt="" />
                <img id="inform" src="images/INFORM.png" alt="" />
                <img id="map" src="images/MAP.png" alt="" />
                <img id="key" src="images/KEY.png" alt="" />
                <img id="pictures" src="images/PICTURES.png" alt="" />
            </div> 
        </body>
    )
}

export default Header