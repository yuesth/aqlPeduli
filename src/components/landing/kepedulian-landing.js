import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import "./kepedulian.css"

const Judul = () => {
    return (
        <Col style={{ textAlign: `center` }}>
            <div className="judulKepedulian">
                <h2>
                    Kepedulian
                </h2>
                <div className="border"></div>
            </div>
        </Col>
    )
}

const ListKepedulian = () => {
    return (
        <Container>
            <Row>
                <Col xs={6} md={4} style={{ textAlign: `center` }} className="colKepedulian">
                    <Link to="/kepedulian" className="card text-center">
                        <div>
                            <img src={`images/kepedulian/natural-disaster.png`}></img>
                            <h4>Peduli Bencana</h4>
                        </div>
                    </Link>
                </Col>
                <Col xs={6} md={4} style={{ textAlign: `center` }} className="colKepedulian">
                    <Link to="/kepedulian" className="card text-center">
                        <div>
                            <img src={`images/kepedulian/jama-masjid.png`}></img>
                            <h4>Peduli Masjid</h4>
                        </div>
                    </Link>
                </Col>
                <Col xs={6} md={4} style={{ textAlign: `center` }} className="colKepedulian" >
                    <Link to="/kepedulian" className="card text-center">
                        <div>
                            <img src={`images/kepedulian/healthcare.png`}></img>
                            <h4>Peduli Kesehatan</h4>
                        </div>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={{ span: 4, offset: 2 }} style={{ textAlign: `center` }} className="colKepedulian">
                    <Link to="/kepedulian" className="card text-center">
                        <div>
                            <img src={`images/kepedulian/beverages.png`}></img>
                            <h4>Peduli Pangan</h4>
                        </div>
                    </Link>
                </Col>
                <Col xs={6} md={4} style={{ textAlign: `center` }} className="colKepedulian">
                    <Link to="/kepedulian" className="card text-center">
                        <div>
                            <img src={`images/kepedulian/give-love.png`}></img>
                            <h4>Dapur Sedekah</h4>
                        </div>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

function kepedulianPart() {
    return (
        <Container>
            <Row>
                <Judul />
            </Row>
            <br></br>
            <Row>
                <ListKepedulian />
            </Row>
        </Container>
    )
}

export default kepedulianPart;