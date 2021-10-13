module.exports = {
  siteMetadata: {
    title: "Anders Kingo",
    description:
      "Foredragsholder & Forfatter. Holder foredrag om Kierkegaard, Leonard Cohen og kristendom.",
    siteUrl: "https://anderskingo.dk/",
    image:
      "https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "${__dirname}/src/images",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify",
  ],
}
