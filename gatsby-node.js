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
  const dark = palette.main

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
    path: "/reservar",
    component: path.resolve("src/templates/reservar.js"),
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
