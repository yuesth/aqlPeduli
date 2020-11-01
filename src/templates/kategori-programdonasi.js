import React, { useEffect } from 'react'
import { graphql, Link } from 'gatsby'
import { ProgressBar, Button, Col, Container, Row } from "react-bootstrap"
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
            <span style={{ fontSize: `10px` }}>{string}</span>
        )
    }

    function SisaHari(props) {
        var hariTerakhir = new Date(new Date(props.tanggal).getTime() + (props.durasi * 24 * 60 * 60 * 1000));
        var sisaHari = Math.floor((hariTerakhir.getTime() - new Date().getTime()) / (1000 * 3600 * 24))
        return (
            <span>{sisaHari.toString()} hari</span>
        )
    }

    function PersenTerkumpul(props) {
        var persen = (props.terkumpul / props.total) * 100;
        return (
            <ProgressBar now={persen} />
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
        var tostring = parseInt(doc.node.totalterkumpulProgram)
        var idr = tostring.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
        var namaKategoriQuery = doc.node.kategori.namaKategori
        var namaKategoriQuery2 = namaKategoriQuery.replace(/\s/g, "")
        var namaClass = "card item-donasi " + namaKategoriQuery2
        return (
            <div style={{ margin: `0 auto` }}>
                <Link to={`/programs_${doc.node.id}`}>
                    <div class={namaClass} style={{ width: `280px`, margin: `15px 10px`, height: `410px`, borderRadius: `20px`, color: `black` }}>
                        {doc.node.gambarProgram !== null && <Img fixed={doc.node.gambarProgram.childImageSharp.fixed} style={{ marginTop: `8px`, borderRadius: `5px` }} />
                        }
                        <div class="card-body" style={{ padding: `10px`, textAlign: `left` }}>
                            <DariTanggal tanggal={doc.node.created_at}></DariTanggal>
                            <h5 class="card-title">{doc.node.judulProgram}</h5>
                            <p class="card-text kontenListProgram">{doc.node.deskripsiProgram}</p>
                            <Container>
                                <Row>
                                    <Col md={5} style={{ textAlign: `left`, fontSize: `10px` }}>
                                        <p style={{ marginBottom: `5px` }}>Sisa Waktu</p>
                                        {doc.node.durasiProgram !== null && <SisaHari tanggal={doc.node.created_at} durasi={doc.node.durasiProgram} />
                                        }
                                    </Col>
                                    <Col md={{ span: `6`, offset: `1` }} style={{ textAlign: `right`, fontSize: `10px` }}>
                                        <p style={{ marginBottom: `5px` }}>Terkumpul</p>
                                        <span>Rp.{idr}</span>
                                    </Col>
                                </Row>
                            </Container>
                            <br />
                            <div>
                                <PersenTerkumpul total={doc.node.totaldanaProgram} terkumpul={doc.node.totalterkumpulProgram}></PersenTerkumpul>
                            </div>
                        </div>
                    </div>
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
                    <Col md={2} id="col-list">
                        <Row>
                            <Col style={{ textAlign: `center` }}>
                                <h4>Kategori</h4>
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Container>
                                <Row>
                                    <Col>
                                        <Button variant="default" onClick={() => filterSelection('all')} className="kategoriBtn">Semua</Button>
                                    </Col>
                                </Row>
                                <br />
                            </Container>
                            {item_kateg.map((kateg, idx) => {
                                if (kateg.namaKateg == data.strapiKategori.namaKategori) {
                                    var nama1 = kateg.namaKateg
                                    var nama2 = nama1.replace(/\s/g, "")
                                    return (
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Button variant="default" onClick={() => filterSelection(nama2)} key={idx} className="kategoriBtn active">{kateg.namaKateg}</Button>
                                                </Col>
                                            </Row>
                                            <br />
                                        </Container>
                                    )
                                }
                                else {
                                    var nama1 = kateg.namaKateg
                                    var nama2 = nama1.replace(/\s/g, "")
                                    return (
                                        <Container>
                                            <Row>
                                                <Col>
                                                    <Button variant="default" onClick={() => filterSelection(nama2)} key={idx} className="kategoriBtn">{kateg.namaKateg}</Button>
                                                </Col>
                                            </Row>
                                            <br />
                                        </Container>
                                    )
                                }
                            })}
                        </Row>
                    </Col>
                    <Col md={10}>
                        <input className="searchInput" placeholder="Masukkan judul program kepedulian" style={{ width: `80%` }}>
                        </input>
                        <a href="#"><img src={`images/program_donasi/searchBtn.png`} alt="" /></a>
                        <div className="container-fluid d-flex">
                            <div className="row">
                                {listProgram}
                            </div>
                        </div>
                    </Col>
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