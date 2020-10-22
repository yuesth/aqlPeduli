import React from 'react'

function ItemProgram(props) {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.dataStrapiProgram.gambarProgram} alt="" />
            </div>
            <div className="card-body text-dark" style={{ height: `auto`, overflow: `hidden` }}>
                <h4 className="card-title"> {props.dataStrapiProgram.judulProgram}</h4>
                <p className="card-text">{props.dataStrapiProgram.deskripsiProgram}</p>
                <h6>Donasi terkumpul: {props.dataStrapiProgram.totalterkumpulProgram}</h6>
                <h6>Total donasi: {props.dataStrapiProgram.totaldanaProgram}</h6>
                <h6>Durasi donasi: {props.dataStrapiProgram.durasiProgram}</h6>
                <a href="#" className="btn btn-outline-success">Donasi</a>
            </div>
        </div>
    )
}

export default ItemProgram