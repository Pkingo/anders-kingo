import React, { FC } from "react"
import { Seo } from "./Seo"
import { Banner } from "./Banner"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { Link } from "gatsby"

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

import { MDXProvider } from "@mdx-js/react"
import { MarkdownImage } from "./MarkdownImage"

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className="col-span-2" {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="col-span-2" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="col-span-2" {...props} />
  ),
  h4: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4 className="col-span-2" {...props} />
  ),
  h5: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h5 className="col-span-2" {...props} />
  ),
  h6: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h6 className="col-span-2" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="pb-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="p-2" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="py-1 col-start-1" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
    props.target === "_blank" ? (
      <a className="underline text-blue-greek" {...props} />
    ) : (
      <Link className="underline text-blue-greek" to={props.href || ""}>
        {props.children}
      </Link>
    ),
  img: MarkdownImage,
}

// <GatsbyImage alt='some alt text' image={getImage(props...)} />

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
        <div
          className="lg:grid lg:grid-cols-2 mb-auto mx-auto w-11/12 lg:w-main py-8"
          id="content"
        >
          <MDXProvider components={components}>{props.children}</MDXProvider>
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Layout
