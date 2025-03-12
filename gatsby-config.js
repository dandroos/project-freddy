const config = require("./style")

module.exports = {
  siteMetadata: {
    title: `El Rincón de Idiomas (Academia de Inglés)`,
    mob_title: `El Rincón de Idiomas`,
    description: `El Rincón de Idiomas es una academia de inglés con sede en Fuerteventura. Somos un centro de preparación de exámenes de Cambridge English y afiliado con Oxford Test of English.`,
    lang: "en",
    author: `@dandrewsdeveloper`,
    siteUrl: `https://elrincondeidiomas.com/`,
  },
  plugins: [
    "gatsby-plugin-site-wrapper",
    "gatsby-plugin-mui-emotion",
    "gatsby-plugin-redux",
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["forte"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contact`,
        path: `${__dirname}/contact`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images-v2`,
            options: {
              staticFolderName: "content/site_images",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 500,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `el-rincon-de-idiomas`,
        short_name: `el-rincon`,
        start_url: `/`,
        background_color: "#203767",
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: "#203767",
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
