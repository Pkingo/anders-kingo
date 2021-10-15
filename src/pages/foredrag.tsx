import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GetIndexQueryQuery } from "../../graphql-types"

import { Layout } from "../components/Layout"

export const query = graphql`
  query GetForedragQuery {
    mdx(fileAbsolutePath: { regex: "/foredrag.mdx/" }) {
      id
      frontmatter {
        title
      }
      body
    }
  }
`

const ForedragPage = ({ data }: PageProps<GetIndexQueryQuery>) => (
  // <Layout title={data.mdx?.frontmatter?.title}>
  //   <MDXRenderer>{data.mdx?.body || ""}</MDXRenderer>
  // </Layout>
  <pre>{JSON.stringify(data, null, 2)}</pre>
)

export default ForedragPage
