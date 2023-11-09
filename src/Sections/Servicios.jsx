/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MdComputer, MdTabletAndroid, MdLightbulbOutline } from "react-icons/md";
import { LuPencil } from "react-icons/lu";
import { HiOutlineChartPie } from "react-icons/hi";
import { BiLike } from "react-icons/bi";
// import Carousel from '../Components/Carousel';

function Servicios() {
    return (
        <div>
            <section id="servicios">
                <h1>Nuestros Servicios</h1>   
                <div className="icons">
                    <div className="item">
                        <MdComputer />
                        <p>Website</p>
                    </div>
                    <div className="item">
                        <MdTabletAndroid />
                        <p>Apps</p>
                    </div>
                    <div className="item">
                        <LuPencil />
                        <p>Branding</p>
                    </div>
                    <div className="item">
                        <MdLightbulbOutline />
                        <p>Start Up</p>
                    </div>
                    <div className="item">
                        <HiOutlineChartPie />
                        <p>M. Digital</p>
                    </div>
                    <div className="item">
                        <BiLike />
                        <p>Social Media</p>
                    </div>
                </div>
                <hr />
                <div className="carrusel">
                    <img className="img_web" src="./images/image_web.png" alt="" />
                    <div className="content">
                        <h4>Website</h4>
                        <p>Construimos proyectos web que marcan la diferencia y garantizan la experiencia de usuario, navegabilidad, accesibilidad, diseño responsive y optimización en buscadores</p>
                        <br />
                        <p>Nuestros conocimientos se adaptan a los cambios tecnológicos, aplicando las últimas tendencias al desarrollo web, como HTML5, CSS3, JavaScript, Diseño resposive y Https.</p>
                        <br />
                        <div className="boton_wp">
                            <a href="#" className="contact">Contáctanos</a>
                            <img className="image_wp" src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servicios