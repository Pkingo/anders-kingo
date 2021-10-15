module.exports = {
  siteMetadata: {},
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `meta`,
        path: `${__dirname}/content/meta`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/content/images`,
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify",
    `gatsby-remark-images`,
    `gatsby-plugin-mdx`,
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: ({ node }) => node.name,
      },
    },
    `gatsby-plugin-graphql-codegen`,
  ],
}
