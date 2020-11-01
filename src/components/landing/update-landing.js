import React, { useEffect } from "react"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col } from "react-bootstrap"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import "./update.css"
import ButtonBacaLagi from "../button-bacalagi"

const JudulUpdate = () => {
    return (
        <Col>
            <div className="judulUpdate">
                <h2>
                    Update
                        </h2>
                <div className="borderUpdate"></div>
            </div>
        </Col>
    )
}


// const ListUpdateEntire = (props) => {
//     var banyakUpdate = props.dataUpdate1.length
//     var i = 0, kelipatan = 2
//     while (i < banyakUpdate) {
//         if (i >= 3 && i < 3 * kelipatan) {
//             for (var j = 0; j < kelipatan; j++) {
//                 return(
//                     <ListUpdatePerTiga dataUpdate1={props.dataUpdate1}></ListUpdatePerTiga>
//                 )
//             }
//             i  += 3
//             kelipatan += 1
//         }
//         // else if(i <= 3){
//         //     return(
//         //         <ListUpdatePerTiga dataUpdate1={props.dataUpdate1}></ListUpdatePerTiga>
//         //     )
//         //     i += 3
//         // }
//     }
// }

const ListUpdate = (props) => {
    const itemPerTiga = props.dataUpdate1.map((doc, idx) => {
        return (
            <div class="col-sm-12 col-lg-4" style={{padding:`0 25px`}}>
                <div class="card" style={{ width: `auto`, margin: `auto`, height: `auto`, borderRadius: `40px` }}>
                    <div class="card-body">
                        <span>{doc.tanggal}</span>
                        <h4 class="card-title">{doc.nama}</h4>
                        <p class="card-text kontenUpdate">{doc.des}</p>
                        <ButtonBacaLagi teks="Cek" link={`/programs_Program_${doc.idProgram}`} />
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="col-md-12 div-satu">
            <div className="carousel slide" id="inam" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row">
                                {itemPerTiga}
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#inam" class="carousel-control-prev div-previous" data-slide="prev">
					<span class="carousel-control-prev-icon previous"></span>
				</a>
				<a href="#inam" class="carousel-control-next div-next" data-slide="next">
					<span class="carousel-control-next-icon next"></span>
				</a>
            </div>
        </div>
    )
}

function UpdatePart() {
    const queryUpdateProgram = useStaticQuery(graphql`
    query QueryUpdateLanding{
        allStrapiUpdateProgram(limit: 3, sort: {order: DESC, fields: tanggalpelaksanaanUpdate}) {
            edges {
              node {
                namaUpdate
                program {
                  id
                  judulProgram
                }
                deskripsiUpdate
                tanggalpelaksanaanUpdate(fromNow: true)
                gambarUpdate {
                    childImageSharp {
                      fixed(width: 330, height: 230) {
                        ...GatsbyImageSharpFixed
                      }
                    }
                }
              }
            }
        }
    }
    `)

    const itemUpdate = []
    queryUpdateProgram.allStrapiUpdateProgram.edges.map(doc => {
        if (doc.node.gambarUpdate !== null) {
            var item1 = {
                nama: doc.node.namaUpdate,
                judulProgram: doc.node.program.judulProgram,
                idProgram: doc.node.program.id,
                tanggal: doc.node.tanggalpelaksanaanUpdate,
                des: doc.node.deskripsiUpdate,
                gambar: doc.node.gambarUpdate.childImageSharp.fixed
            }
            itemUpdate.push(item1)
        }
        else {
            var item2 = {
                nama: doc.node.namaUpdate,
                judulProgram: doc.node.program.judulProgram,
                idProgram: doc.node.program.id,
                tanggal: doc.node.tanggalpelaksanaanUpdate,
                des: doc.node.deskripsiUpdate,
            }
            itemUpdate.push(item2)
        }
    })

    return (
        <Container>
            <Row>
                <JudulUpdate />
            </Row>
            <br></br>
            <Row>
                <ListUpdate dataUpdate1={itemUpdate} />
            </Row>
        </Container>
    )
}

export default UpdatePart;


{/* {doc.gambar !== null && <Img fixed={doc.gambar}></Img>}
                    {doc.gambar == null && <Img fixed={`images/update/Mask-Group.png`} width="330" height="230"></Img>} */}