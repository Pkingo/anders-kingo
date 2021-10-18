module.exports = {
  siteMetadata: {},
  plugins: [
    // For addeding header tags (meta, link)
    "gatsby-plugin-react-helmet",

    // Needed for Tailwind CSS
    "gatsby-plugin-postcss",

    // Handle images
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-remark-images",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },

    // Hook up to Netlify CMS
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify",

    // Generate content from YAML files
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-unwrap-images"],
      },
    },
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.tsx"),
        },
      },
    },
  ],
}
