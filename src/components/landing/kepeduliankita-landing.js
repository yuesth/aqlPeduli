import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "gatsby"
import "./kepeduliankita.css"
import ButtonBacaLagi from "../button-bacalagi"
import ButtonBacaLainnya from "../button-bacalainnya"

const Judul = () => {
    return (
        <Col>
            <div className="judulKepedulianKita">
                <div className="border-kita">
                    <h2>
                        Kepedulian Kita
                    </h2>
                </div>
            </div>
        </Col>
    )
}

const SliderKepedulianKita = () => {
    const teksBtn = "Baca Lebih Lanjut";
    return (
        <div class="blog-card">
            <input type="radio" name="select" id="tap-1" checked></input>
            <input type="radio" name="select" id="tap-2"></input>
            <input type="radio" name="select" id="tap-3"></input>
            <input type="checkbox" id="imgTap"></input>
            <div class="sliders">
                <label for="tap-1" class="tap tap-1"></label>
                <label for="tap-2" class="tap tap-2"></label>
                <label for="tap-3" class="tap tap-3"></label>
            </div>
            <div class="inner-part">
                <label for="imgTap" class="img">
                    <img class="img-1" src={`images/kepedulianKita/image1.png`}></img>
                </label>
                <div class="content content-1">
                    <span>26 December 2017</span>
                    <div class="title">
                        Lorem Ipsum Dolor</div>
                    <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus!</div>
                    <ButtonBacaLagi teks={teksBtn}/>
                </div>
            </div>
            <div class="inner-part">
                <label for="imgTap" class="img">
                    <img class="img-2" src={`images/kepedulianKita/image1.png`}></img>
                </label>
                <div class="content content-2">
                    <span>26 December 2018</span>
                    <div class="title">
                        Lorem Ipsum Dolor</div>
                    <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos ut consectetur numquam ullam fuga animi laudantium nobis rem molestias.</div>
                    <ButtonBacaLagi teks={teksBtn}/>
                </div>
            </div>
            <div class="inner-part">
                <label for="imgTap" class="img">
                    <img class="img-3" src={`images/kepedulianKita/image1.png`}></img>
                </label>
                <div class="content content-3">
                    <span>26 December 2019</span>
                    <div class="title">
                        Lorem Ipsum Dolor</div>
                    <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod excepturi nemo commodi sint eum ipsam odit atque aliquam officia impedit.</div>
                    <ButtonBacaLagi teks={teksBtn}/>
                </div>
            </div>
        </div >
    )
}

const ButtonLainnya = () => {
    return (
        <Container>
            <Row>
                <Col style={{ textAlign: `center` }}>
                    <ButtonBacaLainnya />
                </Col>
            </Row>
        </Container>
    )
}

function kepedulianKitaPart() {
    return (
        <Container>
            <Row>
                <Judul />
            </Row>
            <br></br>
            <Row>
                <SliderKepedulianKita />
                <ButtonLainnya />
            </Row>
        </Container>
    )
}

export default kepedulianKitaPart;