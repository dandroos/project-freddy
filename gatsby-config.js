const config = require("./style")

module.exports = {
  siteMetadata: {
    title: `El Rincón de Idiomas`,
    description: `El Rincón de Idiomas es una escuela de inglés con sede en Fuerteventura. Somos un centro de preparación de exámenes de Cambridge English.`,
    lang: "en",
    author: `@dandrewsdeveloper`,
    siteUrl: `https://elrincondeidiomas.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-site-wrapper",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-redux",
    `gatsby-plugin-image`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `articles`,
    //     path: `${__dirname}/content/articles`,
    //   },
    // },
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
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `courses`,
    //     path: `${__dirname}/content/courses`,
    //   },
    // },

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
            // options: {
            // [Optional] The root of "media_folder" in your config.yml
            // Defaults to "static"
            // staticFolderName: 'static',
            // [Optional] Include the following fields, use dot notation for nested fields
            // All fields are included by default
            // include: ['featured'],
            // [Optional] Exclude the following fields, use dot notation for nested fields
            // No fields are excluded by default
            // exclude: ['featured.skip'],
            // },
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
        background_color: config.palette.main,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
