import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ imageName }) => {
  const data = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 1024) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const image = data.allImageSharp.edges.find(
    ({ node }) => node.fluid.originalName === imageName
  )

  if (!image) {
    return null
  }
  return <Img fluid={image.node.fluid} />
}

export default Image
