import React from "react"
import Layout from "../layout"
import { Container, Row, Col, Button } from "react-bootstrap"
import { graphql, useStaticQuery, Link } from "gatsby"
import ButtonBacaLagi from "../button-bacalagi"
import "./layout.css"

const LayoutKepeduliankita = () => {
    const queryKKList = useStaticQuery(graphql`
        query MyQueryyyy{
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
        }
    `)

    const itemListKK = []
    queryKKList.allStrapiKepeduliankita.edges.map(doc => {
        var item = {
            id: doc.node.id,
            judul: doc.node.judulKepedulianKita,
            tanggal: doc.node.created_at,
            konten: doc.node.kontenKepedulianKita,
            gambar: doc.node.gambarKepedulianKita.childImageSharp.fixed.src
        }
        itemListKK.push(item)
    })

    const KKList = itemListKK.map((doc, idx) => {
        return (
            <Row className="item-kk">
                <div class="col-md-4" style={{ margin: `auto auto` }}>
                    <img src={doc.gambar} class="w-100"></img>
                </div>
                <div class="col-md-8 px-3">
                    <div class="card-block px-3">
                        <h4 class="card-title">{doc.judul}</h4>
                        <span>{doc.tanggal}</span>
                        <p class="card-text konten">{doc.konten}</p>
                        <ButtonBacaLagi teks="Baca Lebih Lanjut" link={`/kepeduliankita_${doc.id}`}></ButtonBacaLagi>
                    </div>
                </div>
            </Row>
        )
    })

    return (
        <Layout>
            <Container>
                <Row style={{ textAlign: `center` }}>
                    <Col>
                        <h1>
                            Kepedulian Kita
                        </h1>
                    </Col>
                </Row>
                <Row style={{ textAlign: `center` }}>
                    <Col>
                        <h6>
                            AQL Peduli setiap hari terus bergerak dan tiada henti berkiprah untuk umat, apa saja yang ada di sekitar kita dan seantero dunia.
                            Berikut ini beberapa contoh program kepedulian kita dari donasi teman-teman semua.
                        </h6>
                    </Col>
                </Row>
                <br />
                {KKList}
            </Container>
        </Layout>
    )
}

export default LayoutKepeduliankita