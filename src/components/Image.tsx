import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

export const Image = ({ alt }: any) => {
  const data = useStaticQuery(graphql`
    query GetImageQuery {
      file(absolutePath: { regex: "/content/images/profile.b8250ff8.jpg/" }) {
        childImageSharp {
          gatsbyImageData
        }
        absolutePath
        publicURL
      }
    }
  `)
  const image = getImage(data.file)
  console.log({ alt, data, image })
  return image ? <GatsbyImage image={image} alt={alt} /> : null
}
