import React, { FC } from "react"
import { Link } from "gatsby"

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
            <Link to={`${slug}/${item.slug}`}>{item.title}</Link>
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
  const lectures: { slug: string; title: string }[] = []
  return (
    <nav className="flex justify-between px-16 py-2">
      <div>
        <h2>
          <Link to="/">Anders Kingo</Link>
        </h2>
      </div>
      <ul className="flex gap-4">
        <MenuItem slug="/">Hjem</MenuItem>
        <DropdownMenuItem items={lectures} slug="/foredrag">
          Foredrag
        </DropdownMenuItem>
        <MenuItem slug="/kulturrejser">Kulturrejser</MenuItem>
        <MenuItem slug="/mine-projekter">Mine projekter</MenuItem>
        <MenuItem slug="/publikationer">Publikationer</MenuItem>
        <MenuItem slug="/kontakt">Kontakt</MenuItem>
      </ul>
    </nav>
  )
}
