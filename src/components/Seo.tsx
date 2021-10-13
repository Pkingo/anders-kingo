import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Props = {
  title?: string
  description?: string
  image?: string
  path?: string
  keywords?: string[]
}

export function Seo(props: Props) {
  const data = useStaticQuery(graphql`
    query GetConfigQuery {
      contentYaml {
        siteTitle
        siteKeywords
        baseUrl
        siteDescription
      }
    }
  `)

  const defaults = data?.contentYaml || {}

  const title = props.title || defaults.siteTitle
  const description = props.description || defaults.siteDescription
  const image = new URL(props.image || defaults.image, defaults.baseUrl)
  const url = new URL(props.path || "/", defaults.baseUrl)
  const keywords = (props.keywords || defaults.siteKeywords).join(" ")

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url.href} />
      <meta name="keywords" content={keywords} />
      {image ? <meta name="image" content={image.href} /> : null}

      <meta property="og:url" content={url.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image ? <meta name="og:image" content={image.href} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image ? <meta name="twitter:image" content={image.href} /> : null}
    </Helmet>
  )
}
