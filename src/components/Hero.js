import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const query = graphql`
    {
        file(relativePath: { eq: "background2.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const Hero = () => {
    const {
        file: {
            childImageSharp: { fluid },
        },
    } = useStaticQuery(query)

    return (
        <BackgroundImage
            Tag="section"
            fluid={fluid}
            className="hero"
            style={{
                height: `100vh`,
                width: `100%`,
                backgroundColor: `transparent`,
                backgroundSize: `cover`,
                backgroundPosition: `center center`,
                alignItems: `center`,
            }}
        >
            <div className="section-center hero-center">
                <article className="hero-info">
                    <div>
                        <div className="underline"></div>
                        <span>Welcome to itcompass </span>
                        <h1>Software & Web Development Coding to Deployment</h1>
                        <p>Tech Trends Reviews, Tutorials, News & Blog.</p>
                    </div>
                </article>
            </div>
        </BackgroundImage>
    )
}

export default Hero
