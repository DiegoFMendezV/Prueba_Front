/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div>
            <section id="footer">
                <div className="content_footer">
                    <div className="item_footer">
                        <img src="images/logo.jpg" alt="" />
                    </div>
                    <div className="item_footer">
                        <p>UBICACIÓN</p>
                        <span>Bogotá, Colombia</span>
                    </div>
                    <div className="item_footer">
                        <p>CORREO ELECTRÓNICO</p>
                        <span>contacto@solucionsoft.com</span>
                    </div>
                    <div className="item_footer">
                        <p>TELÉFONOS</p>
                        <span>(057) 301 234 81 30 - (057) 300 631 59 63</span>
                    </div>
                    <div className="item_footer">
                        <img className="logo_wp" src="https://www.freeiconspng.com/thumbs/logo-whatsapp-png/download-and-use-logo-whatsapp-png-clipart-3.png" alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer