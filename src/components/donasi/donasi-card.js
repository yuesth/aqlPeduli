import React from "react"
import aql1 from "../../images/aql1.png"

function card(props) {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={aql1} alt=""></img>
            </div>
            <div className="card-body text-dark" style={{height:`auto`, overflow:`hidden`}}>
                <h6 className="card-title"> {props.donasiList.judul}</h6>
                {/* <p className="card-text text-secondary" style={{overflow:`hidden`}}>{props.donasiList.konten}</p> */}
                <a href="#" className="btn btn-outline-success">Donasi</a>
            </div>
        </div>
    )
}

export default card;