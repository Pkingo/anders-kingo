import React from "react"

export const Banner = () => {
  const title = "Anders Kingo"
  const subheader = "Forfatter & foredragsholder"
  return (
    <div className="bg-blue-greek text-white flex flex-col py-4">
      <h2 className="w-main self-center">{title}</h2>
      <h4 className="w-main self-center">{subheader}</h4>
    </div>
  )
}
