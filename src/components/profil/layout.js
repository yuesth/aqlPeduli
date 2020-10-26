import React from "react"
import Layout from "../layout"
import { Container, Row, Col } from "react-bootstrap"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import "./layout.css"

const TampilMap = (props) => {
    return (
        <Map center={props.position} zoom={props.zoom}>
            <TileLayer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            {props.markerText !== "" &&
                <Marker position={props.position}>
                    <Popup>{props.markerText}</Popup>
                </Marker>
            }
        </Map>
    )
}

const LayoutProfil = () => {
    return (
        <Layout>
            <Container className="wadah-profil">
                <Row style={{ textAlign: `center` }}>
                    <Col md={7}>
                        <h2>Tentang AQL Peduli</h2>
                        <p className="lead paragraf1" style={{ textAlign: `justify` }}>
                            AQL Peduli bagian dari Laznas AQL adalah lembaga amil zakat,
                            infaq dan sedekah, bernaung dibawah lembaga dakwah
                            AQL Islamic Center  ( Yayasan Pusat Peradaban Islam )
                            yang dipimpin KH. Bachtiar Nasir, Lc. MM, berkarakter
                            Quran dan Sunnah dengan mengedepankan nilai-nilai
                            kepercayaan, sosial, kemanusiaan, pendidikan dan dakwah.
                        </p>
                    </Col>
                    <Col md={5}>
                        <img src={`images/profil/logo-aql.png`}></img>
                    </Col>
                </Row>
                <br />
                <Row className="row-lb">
                    <Col>
                        <div className="wadah-lb">
                            <img src={`images/profil/latarbelakang.png`}></img>
                            <h3>
                                <strong>Latar Belakang</strong>
                            </h3>
                            <p>
                                CoinBase is an online site and a p2admin platform that allows users to buy, sell and/ or exchange digital and fiat assets safely. Owned and managed by CoinBase Business Services established and Incoperated in Nigeria.. e Business Services established and Incoperated in Nigeria.
                                e Business Services established and Incoperated in Nigeria.
                            </p>
                        </div>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col md={6}>
                        <img src={`images/profil/quote-buka.png`}></img>
                    </Col>
                    <Col md={6} style={{ textAlign: `right`, margin: `auto` }}>
                        <h3>
                            <strong>Visi</strong>
                        </h3>
                        <p>
                            Menjadi lembaga kemanusiaan yang profesional bertaraf internasional
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md={6} style={{ textAlign: `left`, margin: `auto` }}>
                        <h3>
                            <strong>Misi</strong>
                        </h3>
                        <p>
                            Memberikan solusi problem tanggap darurat kemanusiaan dengan cepat, tepat dan terintegrasi serta membangun kembali masyarakat pasca bencana dalam tatanan nilai dan peradaban yang lebih baik
                        </p>
                        <p>
                            Memiliki kinerja yang dapat dipercaya, transparan, terukur, responsif dan sesuai dengan aturan yang berlaku
                        </p>
                    </Col>
                    <Col md={6}>
                        <img src={`images/profil/quote-tutup.png`} style={{ marginLeft: `30px` }}></img>
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col>
                        <div className="wadah-alamat">
                            <h2>
                                <strong>
                                    Alamat
                            </strong>
                            </h2>
                            <div className="border-alamat"></div>
                            <br />
                            <div className="wadah-map">
                                {/* <TampilMap position={[-6.2257, 106.85273]} zoom={5} markerText={`AQL Peduli`} /> */}
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default LayoutProfil