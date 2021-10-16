import React, { FC } from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { HeaderContentQuery } from "../../graphql-types"

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

const DropdownMenuItem: FC<{
  slug: string
  items: { slug: string; title: string }[]
}> = ({ slug, items, children }) => (
  <li className="self-center group relative dropdown  px-4 text-blue-greek font-bold text-base uppercase tracking-wide hover:underline">
    <Link to={slug}>{children}</Link>
    <div className="group-hover:block dropdown-menu absolute hidden h-auto -left-3">
      <ul className="top-0 w-max bg-white shadow px-6 py-4">
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
  <li className="self-center  text-blue-greek font-bold uppercase tracking-wide hover:underline">
    <Link to={slug}>{children}</Link>
  </li>
)

export const Header = () => {
  const data = useStaticQuery<HeaderContentQuery>(query)
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
    <nav className="flex justify-end px-8 py-4">
      <ul className="flex gap-4">
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
