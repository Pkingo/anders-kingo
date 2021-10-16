import React from "react"
import Layout from "./Layout"

type Props = {
  title?: string
  description?: string
  image?: string
  path?: string
}

const PageLayout: React.FC<Props> = ({ children, ...props }) => {
  console.log({ props })
  return <Layout {...props}>{children}</Layout>
}

export default PageLayout
