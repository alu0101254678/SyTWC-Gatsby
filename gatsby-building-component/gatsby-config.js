/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: `/SyTWC-Gatsby`,
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  siteMetadata: {
    siteUrl: `https://alu0101254678.github.io/SyTWC-Gatsby`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
