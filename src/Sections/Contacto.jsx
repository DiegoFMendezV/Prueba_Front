/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Form from "../Components/Form";


function Contacto() {
    return (
        <div>
            <section id="contacto">
                <div>
                    <h1>Contáctanos</h1>
                    <Form/>
                </div>
                <div className="image_world">
                    <img src="./images/world.png" alt="" />
                </div>
            </section>
        </div>
    )
}

export default Contacto