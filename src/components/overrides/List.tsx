import React from "react"

export const Ul = (props: React.HTMLAttributes<HTMLUListElement>) => (
  <ul className="pb-2" {...props} />
)

export const Li = (props: React.HTMLAttributes<HTMLLIElement>) => (
  <li className="p-2 col-start-1" {...props} />
)
