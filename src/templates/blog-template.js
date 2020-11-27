import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import ReactMarkdown from "react-markdown"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
    const { content, title, desc } = data.blog

    return (
        <Layout>
            <SEO title={title} description={desc} />
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
        }
    }
`

export default ComponentName
