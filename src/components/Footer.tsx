import React from "react"

export const Footer = () => {
  const text = "Har du spørgsmål, så ring gerne på tlf.: 75 88 10 50"
  return (
    <div className="bg-blue-greek flex justify-center p-10">
      <p className="text-white">{text}</p>
    </div>
  )
}
