module.exports = {
  siteMetadata: {},
  plugins: [
    // For addeding header tags (meta, link)
    "gatsby-plugin-react-helmet",

    // Needed for Tailwind CSS
    "gatsby-plugin-postcss",

    // Handle images
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-remark-images",

    // Hook up to Netlify CMS
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify",

    // Generate content from YAML files
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `meta`,
        path: `${__dirname}/src/meta/`,
      },
    },
    {
      resolve: "gatsby-transformer-yaml",
      options: {
        typeName: ({ node }) => node.name,
      },
    },

    // Auto generate types for GraphQL queries
    "gatsby-plugin-graphql-codegen",

    // Auto generate pages from MDX
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `foredrag`,
        path: `${__dirname}/src/foredrag`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/foredrag`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `kulturrejser`,
        path: `${__dirname}/src/kulturrejser`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/kulturrejser`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/PageLayout.tsx"),
        },
      },
    },
  ],
}
