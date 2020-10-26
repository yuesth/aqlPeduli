import React, { useEffect } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, graphql, useStaticQuery } from "gatsby"
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

function SliderKepedulianKita(props) {
    const teksBtn = "Baca Lebih Lanjut";
    const listKK = props.data.map((doc, idx) => {
        var idxx = idx + 1
        var contentClass = "content content-" + idxx
        var imgClass = "img-" + idxx
        return (
            <div class="inner-part" key={idx}>
                <label for="imgTap" class="img">
                    <img class={imgClass} src={doc.src}></img>
                </label>
                <div class={contentClass}>
                    <span>{doc.tanggal}</span>
                    <div class="title">
                        {doc.judul}
                    </div>
                    <div class="text">
                        {doc.konten}
                    </div>
                    <ButtonBacaLagi teks={teksBtn} link={`/kepeduliankita_${doc.id}`} />
                </div>
            </div>
        )
    })
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
            {listKK}
        </div >
    )
}

const ButtonLainnya = () => {
    return (
        <Container>
            <Row>
                <Col style={{ textAlign: `center` }}>
                    <Link to={`/kepeduliankita`}>
                        <ButtonBacaLainnya teksBacaLainnya={`Lihat Lainnya`} />
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

function KepedulianKitaPart() {
    const queryKK = useStaticQuery(graphql`
    query MyQueryyy{
        allStrapiKepeduliankita {
            edges {
              node {
                id
                judulKepedulianKita
                kontenKepedulianKita
                created_at(formatString: "MM/DD/YYYY")
                gambarKepedulianKita {
                    childImageSharp {
                      fixed(width: 300, height: 140) {
                        src
                      }
                    }
                }
              }
            }
        }
    }`)

    const itemKepedulian = []
    queryKK.allStrapiKepeduliankita.edges.map(doc => {
        var item = {
            id: doc.node.id,
            judul: doc.node.judulKepedulianKita,
            konten: doc.node.kontenKepedulianKita,
            tanggal: doc.node.created_at,
            src: doc.node.gambarKepedulianKita.childImageSharp.fixed.src
        }
        itemKepedulian.push(item)
    })

    return (
        <Container>
            <Row>
                <Judul />
            </Row>
            <br></br>
            <Row>
                <SliderKepedulianKita data={itemKepedulian} />
                <ButtonLainnya />
            </Row>
        </Container>
    )
}

export default KepedulianKitaPart;

{/* <div class="inner-part">
                <label for="imgTap" class="img">
                    <img class="img-1" src={`images/kepedulianKita/image1.png`}></img>
                </label>
                <div class="content content-1">
                    <span>26 December 2017</span>
                    <div class="title">
                        Lorem Ipsum Dolor</div>
                    <div class="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus!</div>
                    <ButtonBacaLagi teks={teksBtn} />
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
                    <ButtonBacaLagi teks={teksBtn} />
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
                    <ButtonBacaLagi teks={teksBtn} />
                </div>
            </div> */}