require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Portfolio`,
    description: `Marcos Mercado personal website`,
    author: `@marcoscoca`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `services`,
        path: `${__dirname}/src/services`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Marcos Mercado Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#e84545`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    "gatsby-plugin-offline",
  ],
}
