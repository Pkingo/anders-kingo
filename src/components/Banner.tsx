import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const Banner = () => {
  const data = useStaticQuery(graphql`
    query GetBannerQuery {
      allFile(filter: { relativePath: { eq: "meta/banner.yml" } }) {
        nodes {
          childMetaYaml {
            subheader
            header
          }
        }
      }
    }
  `)

  const { header, subheader } = data.allFile.nodes[0].childMetaYaml
  return (
    <div className="bg-blue-greek text-white flex flex-col py-4">
      <h2 className="w-main self-center">{header}</h2>
      <h4 className="w-main self-center">{subheader}</h4>
    </div>
  )
}
