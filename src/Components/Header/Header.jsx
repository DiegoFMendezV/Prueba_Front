/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { FaBars } from "react-icons/fa";

function Header() {
    const [ menu , setMenu ] = useState (false)
    const toggleMenu = () => {
        setMenu(!menu)
    } 
    return (
        <body>
            <nav>
                <div>
                    <img src="logo.jpg" alt="" />
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
                        <a href="" className="contact">Contáctanos</a>
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
            <div className="images">
                <img id="id" src="ID.png" alt="" />
                <img id="shooting" src="SHOOTING.png" alt="" />
                <img id="clothe" src="CLOTHE.png" alt="" />
                <img id="edit" src="EDIT.png" alt="" />
                <img id="inform" src="INFORM.png" alt="" />
                <img id="map" src="MAP.png" alt="" />
                <img id="key" src="KEY.png" alt="" />
                <img id="pictures" src="PICTURES.png" alt="" />
            </div>
            
        </body>
    )
}

export default Header