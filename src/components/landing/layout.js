import React from "react"
import Img from "gatsby-image"
import Layout from "../layout"
import CarouselPart from "./carousel-landing"
import KepedulianPart from "./kepedulian-landing"
import KepedulianKitaPart from "./kepeduliankita-landing"
import UpdatePart from "./update-landing"
import BeritaPart from "./berita-landing"
import { Container } from "react-bootstrap"

function LayoutLanding() {
    return (
        <Layout>
            <Container>
                <CarouselPart />
            </Container>
            <br></br>
            <br></br>
            <KepedulianPart />
            <br></br>
            <br></br>
            <KepedulianKitaPart />
            <br></br>
            <br></br>
            <UpdatePart />
            <br></br>
            <br></br>
            <BeritaPart />
        </Layout>
    )
}

export default LayoutLanding