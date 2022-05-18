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

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // const paginationQuery = await graphql(`
  //   {
  //     allFile(
  //       filter: {
  //         sourceInstanceName: { eq: "articles" }
  //         extension: { eq: "md" }
  //       }
  //       sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
  //     ) {
  //       edges {
  //         node {
  //           childMarkdownRemark {
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (paginationQuery.errors) {
  //   reporter.panicOnBuild("Error while running Pagination query")
  //   return
  // }

  // const posts = paginationQuery.data.allFile.edges
  // const postsPerPage = 5
  // const numPages = Math.ceil(posts.length / postsPerPage)

  // Array.from({ length: numPages }).forEach(async (_, i) => {
  //   await createPage({
  //     path: i === 0 ? `/noticias/` : `/noticias/${i + 1}`,
  //     component: path.resolve("src/templates/noticias.js"),
  //     context: {
  //       limit: postsPerPage,
  //       skip: i * postsPerPage,
  //       numPages,
  //       currentPage: i + 1,
  //     },
  //   })
  // })

  // const articlesQuery = await graphql(`
  //   {
  //     allFile(
  //       filter: {
  //         sourceInstanceName: { eq: "articles" }
  //         extension: { eq: "md" }
  //       }
  //     ) {
  //       edges {
  //         node {
  //           childMarkdownRemark {
  //             id
  //             fields {
  //               slug
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)

  // if (articlesQuery.errors) {
  //   reporter.panicOnBuild("Error while running article query")
  //   return
  // }
  // articlesQuery.data.allFile.edges.forEach(({ node }) => {
  //   createPage({
  //     path: `/noticias${node.childMarkdownRemark.fields.slug}`,
  //     component: path.resolve("src/templates/article.js"),
  //     context: { id: node.childMarkdownRemark.id },
  //   })
  // })

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
    path: "/cursos-presenciales",
    component: path.resolve("src/templates/cursosPresenciales.js"),
    context: {
      light,
      dark,
    },
  })

  createPage({
    path: "/cursos-online",
    component: path.resolve("src/templates/cursosOnline.js"),
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
    path: "/faq",
    component: path.resolve("src/templates/faq.js"),
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
