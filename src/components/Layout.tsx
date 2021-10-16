import React, { FC } from "react"
import { Seo } from "./Seo"
import { Banner } from "./Banner"
import { Header } from "./Header"
import { Footer } from "./Footer"

import "../styles/global.css"

type Props = {
  location: Location
  pageContext: {
    frontmatter: {
      title: string
    }
  }
  path: string
  uri: string
}

const Layout: FC<Props> = props => {
  const title = props.pageContext.frontmatter.title
  const path = props.location.href
  return (
    <>
      <Seo title={title} path={path} />
      <main className="flex flex-col h-screen justify-between">
        <div>
          <Header />
          <Banner />
        </div>
        <div className="mb-auto mx-auto w-11/12 lg:w-main py-4" id="content">
          {props.children}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Layout
