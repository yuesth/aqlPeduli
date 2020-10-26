import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./button-bacalagi.css"


function ButtonBacaLagi(props) {
    return (
        <a href={props.link}>
            <button className="btnBacaLagi">
                {props.teks}
            </button>
        </a>
    )
}

export default ButtonBacaLagi;