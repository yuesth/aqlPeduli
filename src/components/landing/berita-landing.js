import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"
import "./berita.css"
import ButtonBacaLagi from "../button-bacalagi"
import ButtonBacaLainnya from "../button-bacalainnya"

const JudulBerita = () => {
    return (
        <Col style={{ textAlign: `center` }}>
            <div className="judulBerita">
                <h2>
                    Berita Terbaru
                </h2>
                <div className="borderBerita"></div>
            </div>
        </Col>
    )
}

const JudulJenisBerita = (props) => {
    return (
        <Col>
            <div className="judulenisberita">
                <div className="border-juduljenisberita">
                    <h5>
                        {props.teksJudulJenisBerita}
                    </h5>
                </div>
            </div>
        </Col>
    )
}

const ItemBerita = (props) => {
    const teksBtn = "Baca Lebih Lanjut"
    return (
        <Row>
            <Col>
                <div className="card float-right" style={{ margin: `10px`, padding: `8px` }} >
                    <div className="row">
                        <div className="col-sm-5">
                            <img className="d-block w-100" src="https://picsum.photos/150?image=641" alt=""></img>
                        </div>
                        <div className="col-sm-7">
                            <div className="card-block">
                                <h6 className="card-title">Small card</h6>
                                <p>Change around the content for awsomenes</p>
                                <br></br>
                                <ButtonBacaLagi teks={teksBtn} />
                            </div>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>

    )
}

const BeritaNasional = () => {
    const teksJudulJenisBerita = "Berita Nasional"
    return (
        <Col>
            <Row>
                <JudulJenisBerita teksJudulJenisBerita={teksJudulJenisBerita} />
            </Row>
            <Row>
                <ItemBerita />
                <ItemBerita />
                <ItemBerita />
            </Row>
            <Row>
                <Col style={{textAlign: `center`,}}>
                    <ButtonBacaLainnya teksBacaLainnya={`Lihat berita nasional lainnya`}/>
                </Col>
            </Row>
        </Col>
    )
}

const BeritaInternasional = () => {
    const teksJudulJenisBerita = "Berita Internasional"
    return (
        <Col>
            <Row>
                <JudulJenisBerita teksJudulJenisBerita={teksJudulJenisBerita} />
            </Row>
            <Row>
                <ItemBerita />
                <ItemBerita />
                <ItemBerita />
            </Row>
            <Row>
                <Col style={{textAlign: `center`,}}>
                    <ButtonBacaLainnya teksBacaLainnya={`Lihat berita internasional lainnya`}/>
                </Col>
            </Row>
        </Col>
    )
}


function BeritaPart() {
    return (
        <Container>
            <Row>
                <JudulBerita />
            </Row>
            <br></br>
            <Row>
                <BeritaNasional />
                <BeritaInternasional />
            </Row>
        </Container>
    )
}

export default BeritaPart;