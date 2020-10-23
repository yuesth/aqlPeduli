import React, {useState} from 'react'
import { graphql } from 'gatsby'
import { Container, Row, Col, Breadcrumb, ProgressBar, Button, Tabs, Tab } from "react-bootstrap"
import Img from "gatsby-image"
import Layout from "../components/layout"
import "./detail-program.css"

function SisaHari(props) {
    var hariTerakhir = new Date(new Date(props.tanggal).getTime() + (props.durasi * 24 * 60 * 60 * 1000));
    var sisaHari = Math.floor((hariTerakhir.getTime() - new Date().getTime()) / (1000 * 3600 * 24))
    return (
        <span>{sisaHari.toString()} hari lagi</span>
    )
}

function ControlledTabs(props) {
    const [key, setKey] = useState('cerita');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
        >
            <Tab eventKey="cerita" title="Cerita">
                <div style={{ width: `auto`, height: `auto` }}>
                    <p>
                        {props.cerita}
                    </p>
                </div>
            </Tab>
            <Tab eventKey="update" title="Update">
                <div style={{ width: `auto`, height: `auto` }}>
                    <h5>{props.update.namaUpdate}</h5>
                    <p>{props.update.deskripsiUpdate}</p>
                </div>
            </Tab>
        </Tabs>
    );
}

const DetailProgram = ({ data }) => {
    const persenTerkumpul = (data.strapiProgram.totalterkumpulProgram / data.strapiProgram.totaldanaProgram) * 100
    return (
        <Layout>
            <Container className="wadah">
                <Row>
                    <Col>
                        <Breadcrumb>
                            <Breadcrumb.Item href="/programdonasi" style={{ textDecoration: `none`, color: `#E92998` }}>Program Kepedulian</Breadcrumb.Item>
                            <Breadcrumb.Item active>{data.strapiProgram.judulProgram}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        {data.strapiProgram.gambarProgram !== null && <Img fixed={data.strapiProgram.gambarProgram.childImageSharp.fixed} />
                        }
                    </Col>
                    <Col md={5}>
                        <div className="kop">
                            <h3>{data.strapiProgram.judulProgram}</h3>
                            <p>
                                {data.strapiProgram.deskripsiProgram}
                            </p>
                            <br />
                            <p>{data.strapiProgram.totalterkumpulProgram !== null && data.strapiProgram.totalterkumpulProgram} dari <strong>{data.strapiProgram.totaldanaProgram !== null && data.strapiProgram.totaldanaProgram}</strong></p>
                            <ProgressBar now={persenTerkumpul} label={`${persenTerkumpul} %`} />
                            {data.strapiProgram.durasiProgram !== null && <SisaHari tanggal={data.strapiProgram.created_at} durasi={data.strapiProgram.durasiProgram} />
                            }
                            <div className="row">
                                <div className="col-md-7">
                                    <Button variant="success">DONASI SEKARANG</Button>
                                </div>
                                <div className="col-md-5">
                                    <Button variant="primary">BAGIKAN</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        {data.strapiProgram.cerita_program !== null && <ControlledTabs cerita={data.strapiProgram.cerita_program.cerita} update={data.strapiProgram.update_programs} />}
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default DetailProgram

export const query = graphql`
query QueryDetailProgram($id: String!){
    strapiProgram(id: {eq: $id}){
        totaldanaProgram
        totalterkumpulProgram
        deskripsiProgram
        durasiProgram
        strapiId
        gambarProgram {
          childImageSharp {
            fixed(height: 330, width: 600) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        created_at(formatString: "MM/DD/YYYY")
        judulProgram
        update_programs {
          namaUpdate
          deskripsiUpdate
          tanggalpelaksanaanUpdate(formatString: "MM/DD/YYYY")
          id
        }
        cerita_program {
            cerita
            id
        }
    }
}`

{/* <h1>{data.strapiProgram.judulProgram}</h1> */ }
