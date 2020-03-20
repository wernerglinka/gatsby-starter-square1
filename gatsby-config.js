module.exports = {
  siteMetadata: require("./src/data/site-metadata.json"),
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    // {
    //  resolve: `gatsby-plugin-page-transitions`,
    //  options: {
    //    transitionTime: 500,
    //  },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      // //////////////////////////////////////////////////////////////////////////////////
      // Source all page markdown files
      // //////////////////////////////////////////////////////////////////////////////////
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    "gatsby-transformer-remark",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      // //////////////////////////////////////////////////////////////////////////////////
      // Plugin to load Google fonts
      // //////////////////////////////////////////////////////////////////////////////////
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Open Sans`,
            variants: [`300`, `500`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-square1`,
        short_name: `square1`,
        start_url: `/`,
      },
    },
  ],
};
