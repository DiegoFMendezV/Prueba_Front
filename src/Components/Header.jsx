import React from "react";

function Header() {
    return (
        <body>
            <nav>
                <div>
                    <img src="logo.jpg" alt="" />
                </div>
                <div className="items">
                    <a href="">Nuestros Servicios</a>
                    <a href="">Proyectos</a>
                    <a href="">Equipo</a>
                    <a href="">Contáctanos</a>
                </div>
                <div className="languages">
                    <a href="">Inglés</a>
                    <span>/</span>
                    <a href="">Español</a>
                </div>
                <div className="boton_wp">
                    <a href="" className="contact">Contáctanos</a>
                    <img className="image_wp" src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png" alt="" />
                </div>
            </nav>
            <div className="titles">
                <h3>WEBSITE - APPS - BRANDING</h3>
                <h1>Creativity</h1>
            </div>
        </body>
    )
}

export default Header