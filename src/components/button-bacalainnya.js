import React from "react"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./button-bacalainnya.css"
import { Button } from "react-bootstrap"

function ButtonBacaLainnya(props) {
    return (
        <Button variant="default" className="lihatlainnya">
            {props.teksBacaLainnya}
        </Button>
    )
}

export default ButtonBacaLainnya;