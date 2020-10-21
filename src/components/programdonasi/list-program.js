import React from 'react'
import ItemProgram from "./item-program"
import { graphql, useStaticQuery } from "gatsby"
import Img from 'gatsby-image'
import { Row, Col, Card, Button, ListGroupItem, ListGroup } from "react-bootstrap"
import ButtonBacaLagi from "../button-bacalagi"

function ListProgram() {
    const data = useStaticQuery(graphql`
    query MyQuery{
        allStrapiProgram {
            edges {
              node {
                idKategori
                judulProgram
                totaldanaProgram
                totalterkumpulProgram
                deskripsiProgram
                durasiProgram
              }
            }
        }
        allStrapiKategori {
            edges {
              node {
                namaKategori
                strapiId
              }
            }
        }
    }`)
    
    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                {data.allStrapiProgram.edges.map(doc => (
                    <Card style={{ width: `300px`, height: `auto`, float: `left`, margin: `7px` }} border="primary">
                        <Card.Body>
                            <Card.Title>
                                <span>
                                    idKategori: {doc.node.idKategori}
                                </span>
                                <p>judul: {doc.node.judulProgram}</p>
                            </Card.Title>
                            <Card.Body>
                                <p>deskripsi: {doc.node.deskripsiProgram}</p>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    <p>durasi: {doc.node.durasiProgram}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p>total dana: {doc.node.totaldanaProgram}</p>
                                </ListGroupItem>
                                <ListGroupItem>
                                    <p>terkumpul: {doc.node.totalterkumpulProgram}</p>
                                </ListGroupItem>
                            </ListGroup>
                            <ButtonBacaLagi teks={`DONASI`} />
                        </Card.Body>
                        {/* <Img fixed={doc.node.gambarProgram.childImageSharp.fixed}></Img> */}
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default ListProgram

// gambarProgram{
//     childImageSharp{
//         fixed(width:80, height:80){
//             ...GatsbyImageSharpFixed
//         }
//     }
// }