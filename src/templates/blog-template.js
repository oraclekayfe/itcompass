import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
    const { content, title, desc, blogbg } = data.blog

    return (
        <Layout>
            <SEO title={title} description={desc} />
            <StyledHero img={blogbg.childImageSharp.fluid}>
                <Banner title={title}></Banner>
            </StyledHero>
            <section className="blog-template">
                <div className="section-center">
                    <article className="blog-content">
                        {<ReactMarkdown source={content} />}
                    </article>
                    <AniLink fade to="/blog" className="btn center-btn">
                        blog
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}

export const query = graphql`
    query GetSingleBlog($slug: String) {
        blog: strapiBlogs(slug: { eq: $slug }) {
            content
            title
            desc
            blogbg: image {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 4160) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
            published_at(formatString: "MMM Do, YYYY")
        }
    }
`

export default ComponentName
