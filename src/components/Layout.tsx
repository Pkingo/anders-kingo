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
}

export const Layout: FC<Props> = ({
  children,
  title,
  description,
  image,
  path,
}) => {
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <main className="flex flex-col h-screen justify-between">
        <div>
          <Header />
          <Banner />
        </div>
        <div className="mb-auto mx-auto w-main py-4" id="content">
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}
