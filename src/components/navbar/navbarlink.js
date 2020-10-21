import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {Button} from "react-bootstrap"
import "./navbarlink.css"
const NavItem = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: #E92998;
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: #E92998;
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    padding: 10px 0;
    font-size: 1.0rem;
    z-index: 6;
  }`

const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">Beranda</NavItem>
      <NavItem to="/">Profil</NavItem>
      <NavItem to="/">Berita</NavItem>
      <NavItem to="/programdonasi">Kepedulian</NavItem>
      <NavItem to="/blog">Informasi</NavItem>
      <NavItem to="/404">Khazanah</NavItem>
      <Button variant="success" className="custom-donasiBtn">DONASI</Button>
      <Button className="custom-relawanBtn">RELAWAN</Button>
    </>
  )

}

export default NavbarLinks