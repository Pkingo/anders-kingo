import React, { FC } from "react"
import { Seo } from "./Seo"
import { Banner } from "./Banner"
import { Header } from "./Header"
import { Footer } from "./Footer"

import "../styles/global.css"

type Props = {
  title?: string
  description?: string
  image?: string
  path?: string
  classNames?: string
}

const Layout: FC<Props> = ({
  children,
  title,
  description,
  image,
  path,
  classNames,
  ...props
}) => {
  console.log({ title, description, image, path, classNames, ...props })
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <main className="flex flex-col h-screen justify-between">
        <div>
          <Header />
          <Banner />
        </div>
        <div
          className={`mb-auto mx-auto w-11/12 lg:w-main py-4 ${classNames}`}
          id="content"
        >
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Layout
