import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import Contact from "../components/Contact.js"
import logo from "../assets/itblack.png"
import ReactMarkdown from "react-markdown"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const { content, title, desc, blogbg } = data.blog

  return (
    <Layout>
      <SEO title={title} description={desc} />
      <StyledHero img={blogbg.childImageSharp.fluid}>
        <Banner title={title} info="Introduction to CSS"></Banner>
      </StyledHero>
      <section className="blog-template section-center">
        <div className="page-content page-container">
          <article className="blog-content">
            {<ReactMarkdown source={content} />}
            <h3 className="share-h3">Share This Post</h3>
            <div class="s9-widget-wrapper" className="s9-widget-wrapper"></div>
          </article>
          <aside>
            <div className="aside-about">
              <div className="underline"></div>
              <span>
                About <strong>itcompass</strong>
              </span>
              <AniLink fade to="/">
                <img src={logo} alt="logo" />
              </AniLink>
              <p>
                <strong>itcompass</strong> is dedicated to bringing the world
                quality Information and Communications Technology News, Tech
                Trends, Gadget Reviews, Software, App and Web Development
                Content, Mobile & Web Development to Deployment, Dev & DevOps
                <strong> diy</strong> Blog Posts.
              </p>
              <div className="pages-btn">
                <AniLink fade to="/about/">
                  <button className="abt-btn">About Us</button>
                </AniLink>
                <AniLink fade to="/contact/">
                  <button className="cont-btn">Contact Us</button>
                </AniLink>
              </div>
            </div>
            <div className="aside-contact">
              <Contact />
            </div>
          </aside>
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
