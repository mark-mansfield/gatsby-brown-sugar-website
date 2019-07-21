import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/**
 * This component is built using `gatsby-background-image` to automatically
 * serve optimized background-images with lazy loading and reduced file sizes
 * as well as a `gatsby-image` for comparison.
 * The image is loaded using a `StaticQuery`, which allows us to load the image
 * from directly within this component, rather than having to pass
 * the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */
const Parrallax = props => (
  <StaticQuery
    imageName
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "BS-parrallax.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.placeholderImage.childImageSharp
      return (
        <Img
          fluid={image.fluid}
          className="page__section-parrallax"
          style={{
            height: "500px",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      )
    }}
  />
)
export default Parrallax
