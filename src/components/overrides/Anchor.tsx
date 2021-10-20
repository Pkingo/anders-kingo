import { Link } from "gatsby"
import React from "react"

export const Anchor = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) =>
  props.target === "_blank" ? (
    <a className="hover:font-bold underline text-blue-greek" {...props} />
  ) : (
    <Link
      className="hover:font-bold underline text-blue-greek"
      to={props.href || ""}
    >
      {props.children}
    </Link>
  )
