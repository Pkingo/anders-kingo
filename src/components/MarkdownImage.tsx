import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { MarkdownImageQuery } from "../../graphql-types"

export const MarkdownImage = (
  props: React.ImgHTMLAttributes<HTMLImageElement>
) => {
  const data = useStaticQuery<MarkdownImageQuery>(graphql`
    query MarkdownImage {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          id
          absolutePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  `)
  const imageFile = data.allFile.nodes.find(file =>
    file.absolutePath.endsWith(props.src || "")
  )
  if (!imageFile?.childImageSharp?.gatsbyImageData || !props.alt) {
    return <img {...props} />
  }

  return (
    <div className="flex justify-around col-start-2 row-start-2 row-end-7">
      <GatsbyImage
        alt={props.alt}
        title={props.title}
        image={imageFile.childImageSharp.gatsbyImageData}
      />
    </div>
  )
}
