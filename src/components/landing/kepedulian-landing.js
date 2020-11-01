import React from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import { Link, graphql, useStaticQuery } from "gatsby"
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

const ListKepedulian = (props) => {
    const arrGbr = ['natural-disaster', 'healthcare', 'jama-masjid', 'beverages', 'give-love']
    const listKategori = props.dataKateg.map((doc, idx) => {
        var pathGbr = `images/kepedulian/${arrGbr[idx]}.png`
        return (
            <Col style={{ textAlign: `center` }} className="colKepedulian">
                <Link to={`/programdonasi_${doc.id}`} className="card text-center">
                    <div>
                        <img src={pathGbr}></img>
                        <h4>{doc.nama}</h4>
                    </div>
                </Link>
            </Col>
        )
    })
    return (
        <Row>
            {listKategori}
        </Row>
    )
}

function KepedulianPart() {
    const queryKategori = useStaticQuery(graphql`
    query QueryKategoriKL{
        allStrapiKategori{
            edges{
                node{
                    id
                    namaKategori
                    idKategori
                }
            }
        }
    }
    `)
    const itemKategori = []
    queryKategori.allStrapiKategori.edges.map(doc => {
        var item = {
            id: doc.node.id,
            nama: doc.node.namaKategori,
            idK: doc.node.idKategori
        }
        itemKategori.push(item)
    })
    return (
        <Container>
            <Row>
                <Judul />
            </Row>
            <br></br>
            <ListKepedulian dataKateg={itemKategori} />
        </Container>
    )
}

export default KepedulianPart;