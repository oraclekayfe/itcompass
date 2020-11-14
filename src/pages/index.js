import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({ data }) => {
    const {
        allStrapiBlogs: { nodes: blogs },
    } = data
    return (
        <Layout>
            <SEO title="Home" description="this is our home page" />
            <Hero />
            <Services />
            <Blogs blogs={blogs} title="lates articles" showLink />
        </Layout>
    )
}

export const query = graphql`
    {
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
    }
`
