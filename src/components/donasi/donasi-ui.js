import React from 'react'
import Card from "./donasi-card"

class Donasi extends React.Component {
    render() {
        var { donasiList } = this.props
        const list = donasiList.map((data, idx) => {
            return (
                <div className="col-md-4" id={idx}>
                    <Card donasiList={data} />
                </div>
            )
        })
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    {list}
                </div>
            </div>
        )
    }
}

export default Donasi