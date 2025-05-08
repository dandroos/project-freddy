const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const { palette } = require("./style")

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  const { light } = palette
  const dark = "#203767"

  createPage({
    path: "/",
    component: path.resolve("src/templates/index.js"),
    context: {
      light,
      dark,
    },
  })
  createPage({
    path: "/cursos",
    component: path.resolve("src/templates/cursos.js"),
    context: {
      light,
      dark,
    },
  })

  createPage({
    path: "/conocenos",
    component: path.resolve("src/templates/conocenos.js"),
    context: {
      light,
      dark,
    },
  })
  createPage({
    path: "/informacion",
    component: path.resolve("src/templates/informacion.js"),
    context: {
      light,
      dark,
    },
  })
  createPage({
    path: "/oxford-test-of-english",
    component: path.resolve("src/templates/oxford-test-of-english.js"),
    context: {
      light,
      dark,
    },
  })
  createPage({
    path: "/cambridge",
    component: path.resolve("src/templates/cambridge.js"),
    context: {
      light,
      dark,
    },
  })
  createPage({
    path: "/online",
    component: path.resolve("src/templates/online.js"),
    context: {
      light,
      dark,
    },
  })
  createPage({
    path: "/traducciones",
    component: path.resolve("src/templates/traducciones.js"),
    context: {
      light,
      dark,
    },
  })
  createPage({
    path: "/contactenos",
    component: path.resolve("src/templates/contactenos.js"),
    context: {
      light,
      dark,
    },
  })
}
