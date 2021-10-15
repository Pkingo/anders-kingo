import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterContentQuery {
      footer {
        text
      }
    }
  `)
  const text = data.footer.text
  return (
    <div className="bg-blue-greek flex justify-center p-10">
      <p className="text-white">{text}</p>
    </div>
  )
}
