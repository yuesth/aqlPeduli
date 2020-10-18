import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import "./update.css"
import ButtonBacaLagi from "../button-bacalagi"

const JudulUpdate = () => {
    return (
        <Col>
            <div className="judulUpdate">
                <h2>
                    Update
                        </h2>
                <div className="borderUpdate"></div>
            </div>
        </Col>
    )
}

const ListUpdate = () => {
    return (
        <div className="col-md-12">
            <div className="carousel slide" id="inam" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                <div class="col-sm-12 col-lg-4">
                                    <div class="card" style={{ width: `auto`, margin: `auto`, height: `auto`, borderRadius: `40px` }}>
                                        <img src={`images/update/Mask-Group.png`} class="card-img-top"></img>
                                        <div class="card-body">
                                            <h4 class="card-title">1.Why you should use skin masks ?</h4>
                                            <p class="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                            <ButtonBacaLagi teks="Cek"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-4">
                                    <div class="card" style={{ width: `auto`, height: `auto`, borderRadius: `40px` }}>
                                        <img src={`images/update/Mask-Group2.png`} class="card-img-top"></img>
                                        <div class="card-body">
                                            <h4 class="card-title">2.Why you should use skin masks ?</h4>
                                            <p class="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                            <ButtonBacaLagi teks="Cek"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-12 col-lg-4">
                                    <div class="card" style={{ width: `auto`, height: `auto`, borderRadius: `40px` }}>
                                        <img src={`images/update/Mask-Group.png`} class="card-img-top"></img>
                                        <div class="card-body">
                                            <h4 class="card-title">3.Why you should use skin masks ?</h4>
                                            <p class="card-text">Skin masks help us to make are skin fresh and also they protect our skin from the harm rays of sun</p>
                                            <ButtonBacaLagi teks="Cek"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

function updatePart() {
    return (
        <Container>
            <Row>
                <JudulUpdate />
            </Row>
            <br></br>
            <Row>
                <ListUpdate />
            </Row>
        </Container>
    )
}

export default updatePart;