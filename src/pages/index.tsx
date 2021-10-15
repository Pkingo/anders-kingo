import React from "react"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GetIndexQueryQuery } from "../../graphql-types"

import { Layout } from "../components/Layout"

export const query = graphql`
  query GetIndexQuery {
    mdx(fileAbsolutePath: { regex: "/home.mdx/" }) {
      id
      frontmatter {
        title
      }
      body
    }
  }
`

const IndexPage = ({ data }: PageProps<GetIndexQueryQuery>) => (
  <Layout title={data.mdx?.frontmatter?.title}>
    <MDXRenderer>{data.mdx?.body || ""}</MDXRenderer>
  </Layout>
)

export default IndexPage
