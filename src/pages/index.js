import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Projects from "../components/Projects"
import MyTypewriter from "../components/Typewriter.js"
import Contact from "../components/Contact.js"
import Services from "../components/Services"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({ data }) => {
    const {
        allStrapiProjects: { nodes: projects },
        allStrapiBlogs: { nodes: blogs },
        herobg,
    } = data
    return (
        <Layout>
            <SEO title="Home" description="this is our home page" />
            <StyledHero home="true" img={herobg.childImageSharp.fluid}>
                <div className="section-center hero-center">
                    <article className="hero-info">
                        <div>
                            <div className="underline"></div>
                            <h4 className="hero-welcome">
                                Welcome to ITCOMPASS{" "}
                            </h4>
                            <MyTypewriter
                                options={{
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </div>
                    </article>
                </div>
            </StyledHero>
            <Services />
            <Projects projects={projects} title="Latest Tutorials" showLink />
            <Blogs blogs={blogs} title="latest articles" showLink />
            <Contact />
        </Layout>
    )
}

export const query = graphql`
    {
        allStrapiProjects(filter: { featured: { eq: true } }) {
            nodes {
                github
                id
                description
                title
                url
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                stack {
                    id
                    title
                }
            }
        }
        allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
            nodes {
                slug
                content
                desc
                date(formatString: "MMM Do, YYYY")
                id
                title
                category
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        herobg: file(relativePath: { eq: "itech2.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
