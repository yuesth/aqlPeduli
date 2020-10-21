import React from "react"
import Img from "gatsby-image"
import Layout from "../layout"
import { Container, Row, Col, Button } from "react-bootstrap"
import ButtonBacaLainnya from "../button-bacalainnya"
import ListProgram from "./list-program"
import IndexPage from "../../pages"
import "./layout.css"

function LayoutProgramdonasi() {
    const kategori = ['Peduli Bencana', 'Peduli Kesehatan', 'Peduli Masjid', 'Peduli Pangan', 'Dapur Sedekah']
    const kategoriBtn = kategori.map((value, idx) => {
        return (
            <Button variant="default" className="kategoriBtn" key={idx}>
                {value}
            </Button>
        )
    })
    return (
        <Layout>
            <Container>
                <Row>
                    <Col style={{ textAlign: `center` }}>
                        <h1>Program Kepedulian</h1>
                    </Col>
                </Row>
                <br />
                <div className="row">
                    <Col>
                        {kategoriBtn}
                        <input className="searchInput" placeholder="Masukkan judul program kepedulian">
                        </input>
                        <a href="#"><img src={`images/program_donasi/searchBtn.png`} alt="" /></a>
                    </Col>
                </div>
                <br />
                <Row>
                    <ListProgram />
                </Row>
            </Container>
        </Layout>
    )
}

export default LayoutProgramdonasi