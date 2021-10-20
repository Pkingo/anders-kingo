import React, { FC, useState } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { HeaderContentQuery } from "../../graphql-types"
import { MenuIcon, CloseIcon } from "./icons"
import cx from "classnames"

const query = graphql`
  query HeaderContent {
    lectures: allMdx(filter: { fileAbsolutePath: { regex: "/foredrag//" } }) {
      nodes {
        id
        frontmatter {
          title
        }
        slug
      }
    }
    travels: allMdx(
      filter: { fileAbsolutePath: { regex: "/kulturrejser//" } }
    ) {
      nodes {
        id
        frontmatter {
          title
        }
        slug
      }
    }
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/mine-projekter//" } }
    ) {
      nodes {
        id
        frontmatter {
          title
        }
        slug
      }
    }
  }
`

type MenuItem = {
  slug: string
  title: string
}

const DropdownMenuItem: FC<{
  slug: string
  items: MenuItem[]
}> = ({ slug, items, children }) => (
  <li className="pl-4 md:pl-0 md:self-center group relative dropdown text-blue-greek font-bold text-base uppercase tracking-wide">
    <Link className="hover:underline" to={slug}>
      {children}
    </Link>
    <div className="group-hover:block dropdown-menu hidden md:absolute h-auto -left-3">
      <ul className="top-0 max-w-full md:w-max bg-white md:shadow px-2 py-4">
        {items.map(item => (
          <li
            key={item.slug}
            className="py-1 block text-blue-greek font-bold text-base uppercase hover:underline"
          >
            <Link to={`/${item.slug}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </li>
)

const MenuItem: FC<{ slug: string }> = ({ slug, children }) => (
  <li className="pl-4 md:pl-0 md:self-center text-blue-greek font-bold uppercase tracking-wide hover:underline">
    <Link to={slug}>{children}</Link>
  </li>
)

export const Header = () => {
  const data = useStaticQuery<HeaderContentQuery>(query)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const lectures = data.lectures.nodes.map(lecture => ({
    slug: lecture.slug || "/",
    title: lecture.frontmatter?.title || "",
  }))
  const travels = data.travels.nodes.map(travel => ({
    slug: travel.slug || "/",
    title: travel.frontmatter?.title || "",
  }))
  const projects = data.projects.nodes.map(project => ({
    slug: project.slug || "/",
    title: project.frontmatter?.title || "",
  }))

  return (
    <nav className="flex justify-start md:justify-end px-8 py-4">
      <div
        className="md:hidden block cursor-pointer text-blue-greek"
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <MenuIcon />
      </div>
      <ul
        className={cx(
          "flex gap-4 flex-col w-full bg-white transition-all duration-500 ease-out h-screen absolute z-10",
          "md:flex-row md:h-auto md:w-auto md:sticky",
          "sm:w-1/2",
          {
            "left-0": isMobileMenuOpen,
            "-left-full": !isMobileMenuOpen,
          }
        )}
      >
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="md:hidden block cursor-pointer self-end px-4 text-blue-greek"
        >
          <CloseIcon />
        </div>
        <MenuItem slug="/">Hjem</MenuItem>
        <DropdownMenuItem items={lectures} slug="/foredrag">
          Foredrag
        </DropdownMenuItem>
        <DropdownMenuItem items={travels} slug="/kulturrejser">
          Kulturrejser
        </DropdownMenuItem>
        <DropdownMenuItem items={projects} slug="/mine-projekter">
          Mine projekter
        </DropdownMenuItem>
        <MenuItem slug="/publikationer">Publikationer</MenuItem>
        <MenuItem slug="/kontakt">Kontakt</MenuItem>
      </ul>
    </nav>
  )
}
