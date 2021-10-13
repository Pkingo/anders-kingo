import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Layout } from "../components/Layout"
import { StaticImage, GatsbyImage } from "gatsby-plugin-image"

export const query = graphql`
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
`

const IndexPage = ({ data }: { data: any }) => {
  const src = `../../${data.mdx.frontmatter.image}`
  console.log(src)

  return (
    <Layout title={data.mdx.frontmatter.title}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
      <StaticImage
        src="../../content/images/profile.b8250ff8.jpg"
        alt={data.mdx.frontmatter.imageAlt}
      />
    </Layout>
  )
}

export default IndexPage
