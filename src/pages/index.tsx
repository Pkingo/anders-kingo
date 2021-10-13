import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { Layout } from "../components/Layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query GetIndexQuery {
      mdx(fileAbsolutePath: { regex: "/home.mdx/" }) {
        id
        frontmatter {
          image
          imageAlt
          title
        }
        body
      }
    }
  `)
  const image = getImage(data.mdx.frontmatter.image)
  return (
    <Layout title="Anders Kingo">
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      {image ? (
        <GatsbyImage image={image} alt={data.mdx.frontmatter.imageAlt} />
      ) : null}
    </Layout>
  )
}

export default IndexPage
