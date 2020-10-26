import React from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col, Breadcrumb } from "react-bootstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import "./detail-kepeduliankita.css"

function DariTanggal(props) {
    var dariTanggal = new Date(props.tanggal)
    var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
    return (
        <p>{string}</p>
    )
}

const DetailKK = ({ data }) => {
    return (
        <Layout>
            <Container className="wadah-kk">
                <Row>
                    <Col>
                        <h1>{data.strapiKepeduliankita.judulKepedulianKita}</h1>
                    </Col>
                </Row>
                <Row>
                    <Breadcrumb>
                        <Breadcrumb.Item href="/kepeduliankita" style={{ textDecoration: `none`, color: `#E92998` }}>Kepedulian Kita</Breadcrumb.Item>
                        <Breadcrumb.Item active>{data.strapiKepeduliankita.judulKepedulianKita}</Breadcrumb.Item>
                    </Breadcrumb>
                </Row>
                <Row>
                    <Col>
                        <Img fixed={data.strapiKepeduliankita.gambarKepedulianKita.childImageSharp.fixed}></Img>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={{ fontSize: `12px`, textAlign: `left` }}>
                            <DariTanggal tanggal={data.strapiKepeduliankita.created_at}></DariTanggal>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={{ textAlign: `justify`, fontSize: `14px` }}>
                            {data.strapiKepeduliankita.kontenKepedulianKita}
                        </p>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default DetailKK

export const query2 = graphql`
    query queryDetailKK($id: String!){
        strapiKepeduliankita(id: {eq: $id}){
            created_at(formatString: "MM/DD/YYYY")
            judulKepedulianKita
            gambarKepedulianKita{
                childImageSharp{
                    fixed(width: 960, height:590){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            kontenKepedulianKita
        }
    }
`