const config = require("./style")

module.exports = {
  siteMetadata: {
    title: `El Rincón de Idiomas`,
    description: `El Rincón de Idiomas es una escuela de inglés con sede en Fuerteventura. Somos un centro de preparación de exámenes de Cambridge English.`,
    lang: "en",
    author: `@dandrewsdeveloper`,
    siteUrl: `https://elrincondeidiomas.com/`,
  },
  plugins: [
    `site-wrapper`,
    `mui-emotion`,
    `redux`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["forte"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `el-rincon-de-idiomas`,
        short_name: `el-rincon`,
        start_url: `/`,
        background_color: config.palette.main,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
