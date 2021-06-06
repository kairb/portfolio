require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Kai Roper-Blackman`,
    description: `Portfolio`,
    author: `@kairb`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    // {
    //   resolve: 'gatsby-plugin-material-ui',
    //   options: {
    //     stylesProvider: {
    //       injectFirst: false,
    //     },
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `07s2g79fhx8u`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
