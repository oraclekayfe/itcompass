import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({
    data: {
        allStrapiBlogs: { nodes: blogs },
        blogbg,
    },
}) => {
    return (
        <Layout>
            <SEO title="Blog" description="this is our blog page" />
            <StyledHero home="true" img={blogbg.childImageSharp.fluid}>
                <Banner
                    title="ITCOMPASS .BLOG"
                    info=" Latest Tech Trends, Reviews, News"
                ></Banner>
            </StyledHero>
            <section className="blog-page">
                <Blogs blogs={blogs} title="blog" />
            </section>
        </Layout>
    )
}

export const query = graphql`
    {
        allStrapiBlogs {
            nodes {
                slug
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
        blogbg: file(relativePath: { eq: "featured.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 4160) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`

export default Blog
