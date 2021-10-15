import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const Banner = () => {
  const data = useStaticQuery(graphql`
    query BannerContentQuery {
      banner {
        subheader
        header
      }
    }
  `)

  const { header, subheader } = data.banner
  return (
    <div className="bg-blue-greek text-white flex flex-col py-4">
      <h2 className="w-main self-center">{header}</h2>
      <h4 className="w-main self-center">{subheader}</h4>
    </div>
  )
}
