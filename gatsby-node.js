/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')


const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for article nodes to use in creating pages.
    resolve(
        graphql(request).then(result => {
            if (result.errors) {
                reject(result.errors)
            }
            return result;
        })
    )
});

exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    const getDetailProgram = makeRequest(graphql,`
    {
        allStrapiProgram{
            edges{
                node{
                    id
                    strapiId
                    judulProgram
                }
            }
        }
    }`).then(result => {
        result.data.allStrapiProgram.edges.map((res, idx) => {
            createPage({
                path: `/programs_${res.node.id}`,
                component: path.resolve(`./src/templates/detail-program.js`),
                context: {
                    id: res.node.id,
                }
            })
        })
    })
    const getDetailKK = makeRequest(graphql,`
    {
        allStrapiKepeduliankita {
            edges {
              node {
                id
              }
            }
        }
    }`).then(resultKK => {
        resultKK.data.allStrapiKepeduliankita.edges.map((res, idx) => {
            createPage({
                path: `/kepeduliankita_${res.node.id}`,
                component: path.resolve(`./src/templates/detail-kepeduliankita.js`),
                context: {
                    id: res.node.id,
                }
            })
        })
    })

    return Promise.all([
        getDetailProgram,
        getDetailKK
    ]) 
}

// exports.createPages = ({ actions }) => {
//     const { createPage } = actions
//     const dogData = [
//         {
//             name: "Fido Bareta",
//             breed: "Sheltie",
//         },
//         {
//             name: "Sparky",
//             breed: "Corgi",
//         },
//     ]

//     dogData.map((dog, idx) => {
//         createPage({
//             path: `/${dog.name}`,
//             component: require.resolve(`./src/templates/coba.js`),
//             context: { dog }
//         })
//     })
// }