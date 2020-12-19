import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import StyledHero from "../components/StyledHero"
import Banner from "../components/Banner"
import Contact from "../components/Contact.js"
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
      <SEO
        title="Explore Information Technology"
        description="Explore Information Technology"
      />
      <StyledHero home="true" img={blogbg.childImageSharp.fluid}>
        <Banner
          title="Explore Information Technology"
          info=" Latest Tech Trends, Reviews, News"
        ></Banner>
      </StyledHero>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
      <Contact />
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
