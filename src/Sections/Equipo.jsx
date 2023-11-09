/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Equipo() {
    return (
        <div>
            <section id="equipo">
                <div className="nuestro_equipo">
                    <div className="content_1">
                        <img className="cohete" src="./images/cohete.png" alt="" />
                        <div className="content_11">
                            <h1>Nuestro Equipo</h1>
                            <p>Buscamos atender las necesidades estratégicas, de las organizaciones y personas para las cuales trabajamos, generando soluciones mediante el uso de plataformas digitales, ampliando su red de contactos y usuarios.</p>
                        </div>
                    </div>
                    <div className="content_2">
                        <img className="mujer" src="./images/mujer.png" alt="" />
                        <ul>
                            <li>PRODUCT MANAGER</li>
                            <li>UX UI DESIGNER</li>
                            <li>FRONT-END ENGINEER</li>
                            <li>DEVELOPER ENGINEER</li>
                            <li>DATA SCIENCE</li>
                            <li id="especialistas">Especialistas</li>
                        </ul>
                        <img className="hombre" src="./images/hombre.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Equipo