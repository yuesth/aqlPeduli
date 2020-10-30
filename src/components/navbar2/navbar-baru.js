import React from 'react'
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap'
import logoAql from "../../images/logo-aql.png"
import "./navbar-baru.css"

const NavbarBaru = () => {
    return (
        <Navbar bg="light" fixed="top" expand="lg">
            <Navbar.Brand href="/" className="brand">
                <img
                    src={logoAql}
                    width="100"
                    height="60"
                    className="d-inline-block align-top"
                    alt="AQL logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="navbar-col-link">
                <Nav className=" navbar-link">
                    <Nav.Link href="/" className="item-link"><h4>Beranda</h4></Nav.Link>
                    <Nav.Link href="/profil" className="item-link"><h4>Profil</h4></Nav.Link>
                    <Nav.Link href="/" className="item-link"><h4>Berita</h4></Nav.Link>
                    <Nav.Link href="/programdonasi" className="item-link"><h4>Program</h4></Nav.Link>
                    <Nav.Link href="/" className="item-link"><h4>Informasi</h4></Nav.Link>
                    <Nav.Link href="/" className="item-link"><h4>Khazanah</h4></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end navbar-btn">
                <a href="#"><button className="navbar-donasi">DONASI</button></a>
                <a href="#"><button className="navbar-relawan">RELAWAN</button></a> 
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavbarBaru