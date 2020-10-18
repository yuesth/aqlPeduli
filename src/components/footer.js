import React from "react"

const footer = (props) => {
    return (
        <div style={{
            position: `relative`,
            bottom: `0`,
            lineHeight: `60px`,
            backgroundColor: `#f5f5f5`,
            textAlign: `center`,
            marginTop:`50px`
        }}>
            MIG © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
    )
}

export default footer