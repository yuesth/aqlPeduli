import React from 'react'

function ItemProgram(props) {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.itemGambar} alt="" />
            </div>
            <div className="card-body text-dark" style={{ height: `auto`, overflow: `hidden` }}>
                <h4 className="card-title"> {props.itemJudul}</h4>
                <p className="card-text">{props.itemDeskripsi}</p>
                <h6>Donasi terkumpul: {props.itemTerkumpul}</h6>
                <h6>Total donasi: {props.itemTotalDana}</h6>
                <h6>Durasi donasi: {props.itemDurasi}</h6>
                <a href="#" className="btn btn-outline-success">Donasi</a>
            </div>
        </div>
    )
}

export default ItemProgram