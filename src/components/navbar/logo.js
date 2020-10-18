import React from "react"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 100px;

  @media (max-width: 1000 px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`

const Logo = () => {
    const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "logo-aql" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 200, pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <LogoWrap as={Link} to="/">
            <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
        </LogoWrap>
    )
}

export default Logo