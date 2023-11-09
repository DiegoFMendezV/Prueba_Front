import React from "react";

function Form() {
    return (
        <div>
            <form action="" className="formu">
                <div className="content_1">
                    <div className="content_11">
                        <label for="nombre">Nombre</label>
                        <input type="text" placeholder="Nombre"/>
                    </div>
                    <div className="content_11">
                        <label for="email">E-mail</label>
                        <input type="email" placeholder="E-mail"/>
                    </div>
                </div>
                <div className="content_2">
                    <label for="idea">Cuéntanos tu idea</label>
                    <textarea placeholder="..." rows="3"></textarea>
                </div>
                <button type="submit" className="enviar">Enviar</button>
            </form>
        </div>
    )
}

export default Form