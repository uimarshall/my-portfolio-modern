import React from "react"
import Typical from "react-typical"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
// We will use Gatsby image, by using graphql to query it.
// const query = graphql`
//   {
//     file(relativePath: { eq: "hero-img.png" }) {
//       childImageSharp {
//         fluid {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `

const query = graphql`
  {
    file(relativePath: { eq: "hero3-img.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = () => {
  // const data = useStaticQuery(query)
  // console.log(data)
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"> </div>
            <h1>Hi, i'm Marshall</h1>

            <h4 id="type-effect">
              And i'm a {""}
              <Typical
                loop={Infinity}
                wrapper="b"
                steps={[
                  "Full-Stack Engineer",
                  1000,
                  "Front-End Engineer!",
                  1000,
                  "Back-End Engineer!",
                  1000,
                  "Content Creator!",
                  1000,
                ]}
              />
            </h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" />
      </div>
    </header>
  )
}

export default Hero
