import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./button-bacalagi.css"


function ButtonBacaLagi(props){
    return(
        <button className="btnBacaLagi">
            {props.teks}
        </button>
    )
}

export default ButtonBacaLagi;