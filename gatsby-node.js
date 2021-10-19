/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = [
    `type Mdx implements Node { frontmatter: Frontmatter }`,
    `type Frontmatter {
      image: File @fileByRelativePath
    }`,
  ]
  createTypes(typeDefs)
}
