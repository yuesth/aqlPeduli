import { Container, Row, Col } from "react-bootstrap"
import React from "react"
import Layout from "../components/layout"

function Blog() {
    return (
        <Layout>
            <Container style={{marginLeft:`100px`, marginTop:`50px`}}>
                <h1>
                    Blog
                </h1>
            </Container>
        </Layout>
    )
}

export default Blog
