import { graphql, PageProps } from "gatsby"
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import { PageQuery } from "../../graphql-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
  query Page($slug: String!) {
    page: mdx(slug: { eq: $slug }) {
      body
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        imageAlt
        imageTitle
      }
    }
  }
`

export default ({ data, path }: PageProps<PageQuery>) => {
  const title = data.page?.frontmatter?.title || "Anders Kingo"
  const image = getImage(data.page?.frontmatter?.image as any)
  const imageTitle = data.page?.frontmatter?.imageTitle || undefined
  const imageAlt = data.page?.frontmatter?.imageAlt || title
  const body = data.page?.body || ""
  console.log({
    title,
    image,
    imageTitle,
    imageAlt,
    body,
    data,
  })
  return (
    <Layout title={title} path={path}>
      <MDXRenderer>{body}</MDXRenderer>
      {image && (
        <GatsbyImage image={image} alt={imageAlt || title} title={imageTitle} />
      )}
    </Layout>
  )
}
