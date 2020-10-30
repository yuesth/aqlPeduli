import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { Card, ListGroupItem, ListGroup, Button, Col, Container, Row } from "react-bootstrap"
import Img from 'gatsby-image'
import Layout from "../components/layout"
import "./kategori-programdonasi.css"


const KategoriProgramdonasi = ({ data }) => {
    var nama1 = data.strapiKategori.namaKategori
    var nama2 = nama1.replace(/\s/g, "")
    useEffect(() => {
        filterSelection(nama2)
        var btnContainer = document.getElementById("col-list");
        var btns = btnContainer.getElementsByClassName("kategoriBtn");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        }
    })

    const item_kateg = []
    data.allStrapiKategori.edges.map(kateg => {
        var it = {
            namaKateg: kateg.node.namaKategori,
            idKateg: kateg.node.idKategori
        }
        item_kateg.push(it)
    })

    function DariTanggal(props) {
        var dariTanggal = new Date(props.tanggal)
        var string = dariTanggal.getDate().toString() + " " + dariTanggal.toLocaleString('default', { month: 'long' }) + " " + dariTanggal.getFullYear()
        return (
            <p>Dari: {string}</p>
        )
    }

    function SisaHari(props) {
        var hariTerakhir = new Date(new Date(props.tanggal).getTime() + (props.durasi * 24 * 60 * 60 * 1000));
        var sisaHari = Math.floor((hariTerakhir.getTime() - new Date().getTime()) / (1000 * 3600 * 24))
        return (
            <span>({sisaHari.toString()} hari lagi)</span>
        )
    }

    function PersenTerkumpul(props) {
        var persen = (props.terkumpul / props.total) * 100;
        return (
            <span>progress: {persen.toString()} %</span>
        )
    }

    function filterSelection(c) {
        var x, i;
        x = document.getElementsByClassName("item-donasi");
        if (c == "all") c = "";
        for (i = 0; i < x.length; i++) {
            RemoveClass(x[i], "show");
            if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
        }
    }

    function AddClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
        }
    }

    function RemoveClass(element, name) {
        var i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
                arr1.splice(arr1.indexOf(arr2[i]), 1);
            }
        }
        element.className = arr1.join(" ");
    }

    const listProgram = data.allStrapiProgram.edges.map(doc => {
        var namaKategoriQuery = doc.node.kategori.namaKategori
        var namaKategoriQuery2 = namaKategoriQuery.replace(/\s/g, "")
        var namaClass = "item-donasi " + namaKategoriQuery2
        return (
            <div style={{ margin: `0 auto` }}>
                <Link to={`/programs_${doc.node.id}`}>
                    <Card border="primary" className={namaClass}>
                        {doc.node.gambarProgram !== null && <Img fixed={doc.node.gambarProgram.childImageSharp.fixed} />
                        }
                        <Card.Body>
                            <Card.Title>
                                <p>judul: {doc.node.judulProgram}</p>
                            </Card.Title>
                            <p>deskripsi: {doc.node.deskripsiProgram}</p>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                <DariTanggal tanggal={doc.node.created_at} />
                                <p>durasi: {doc.node.durasiProgram} hari</p>
                                {doc.node.durasiProgram !== null && <SisaHari tanggal={doc.node.created_at} durasi={doc.node.durasiProgram} />
                                }
                            </ListGroupItem>
                            <ListGroupItem>
                                <p>total dana: Rp {doc.node.totaldanaProgram}</p>
                            </ListGroupItem>
                            <ListGroupItem>
                                <p>terkumpul: {doc.node.totalterkumpulProgram}</p>
                                {doc.node.totalterkumpulProgram !== null && <PersenTerkumpul total={doc.node.totaldanaProgram} terkumpul={doc.node.totalterkumpulProgram} />
                                }
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Link>
            </div>
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
            </Container>
            <br />
            <div className="container" style={{ textAlign: `center` }}>
                <div className="row">
                    <Col id="col-list">
                        <Button variant="default" className="kategoriBtn" onClick={() => filterSelection('all')}>Semua</Button>
                        {item_kateg.map((kateg, idx) => {
                            if (kateg.namaKateg == data.strapiKategori.namaKategori) {
                                var nama1 = kateg.namaKateg
                                var nama2 = nama1.replace(/\s/g, "")
                                return (
                                    <Button variant="default" className="kategoriBtn active" key={idx} onClick={() => filterSelection(nama2)}>
                                        {kateg.namaKateg}
                                    </Button>
                                )
                            }
                            else {
                                var nama1 = kateg.namaKateg
                                var nama2 = nama1.replace(/\s/g, "")
                                return (
                                    <Button variant="default" className="kategoriBtn" key={idx} onClick={() => filterSelection(nama2)}>
                                        {kateg.namaKateg}
                                    </Button>
                                )
                            }
                        })}
                        <input className="searchInput" placeholder="Masukkan judul program kepedulian">
                        </input>
                        <a href="#"><img src={`images/program_donasi/searchBtn.png`} alt="" /></a>
                    </Col>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        {listProgram}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default KategoriProgramdonasi

export const queryListKategProgram = graphql`
    query QueryListKategProgram($id: String!){
        strapiKategori(id: {eq: $id}){
            namaKategori
        }
        allStrapiProgram {
            edges {
              node {
                id
                strapiId
                judulProgram
                totaldanaProgram
                totalterkumpulProgram
                deskripsiProgram
                created_at(formatString: "MM/DD/YYYY")
                durasiProgram
                gambarProgram {
                    childImageSharp {
                      fixed(width: 290, height: 150) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                }
                kategori {
                    idKategori
                    namaKategori
                }
              }
            }
        }
        allStrapiKategori {
            edges {
                node {
                namaKategori
                idKategori
                }
            }
        }
    }
`