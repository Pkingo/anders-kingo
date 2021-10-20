import { graphql, PageProps } from "gatsby"
import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import { PageQuery } from "../../graphql-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXProvider } from "@mdx-js/react"
import cx from "classnames"
import { components } from "../components/overrides"

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
      <div
        className={cx("gap-4", {
          "lg:grid lg:grid-cols-2": Boolean(image),
        })}
      >
        <MDXProvider components={components}>
          <MDXRenderer>{body}</MDXRenderer>
        </MDXProvider>
        {image && (
          <GatsbyImage
            className="col-start-2 row-start-2 row-end-7"
            image={image}
            alt={imageAlt || title}
            title={imageTitle}
          />
        )}
      </div>
    </Layout>
  )
}
