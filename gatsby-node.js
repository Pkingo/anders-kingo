/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
// exports.onCreateNode = ({ node, actions }) => {
//   const { createNodeField } = actions
//   if (node.sourceInstanceName === "images") {
//     createNodeField({
//       node,
//       name: "path",
//       value: `/static/img${node.relativePath}`,
//     })
//   }
// }

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }
    type MdxFrontmatter {
      image: File @link(by: "relativePath")
    }
  `)
}
