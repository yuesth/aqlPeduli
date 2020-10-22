import React from "react"
import Img from "gatsby-image"
import Layout from "../layout"
import { Container, Row, Col, Button } from "react-bootstrap"
import ButtonBacaLainnya from "../button-bacalainnya"
import ListProgram from "./list-program"
import IndexPage from "../../pages"
import "./layout.css"

function LayoutProgramdonasi() {
    return (
        <Layout>
            <Container>
                <Row>
                    <Col style={{ textAlign: `center` }}>
                        <h1>Program Kepedulian</h1>
                    </Col>
                </Row>
            </Container>
            <br />
            <br />                
            <ListProgram />
        </Layout>
    )
}

export default LayoutProgramdonasi