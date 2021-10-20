import React from "react"

export const Img = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <figure className="mx-auto w-max py-4 gap-2">
    <img {...props} />
    {props.title ? (
      <figcaption className="italic w-max">{props.title}</figcaption>
    ) : null}
  </figure>
)
