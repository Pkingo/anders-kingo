import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query GetFooterQuery {
      allFile(filter: { relativePath: { eq: "meta/footer.yml" } }) {
        nodes {
          childMetaYaml {
            text
          }
        }
      }
    }
  `)
  const text = data.allFile.nodes[0].childMetaYaml.text
  return (
    <div className="bg-blue-greek flex justify-center p-10">
      <p className="text-white">{text}</p>
    </div>
  )
}
