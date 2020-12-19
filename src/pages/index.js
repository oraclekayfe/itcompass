import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Reveal from "../components/Reveal"
import Contact from "../components/Contact.js"
import Banner from "../components/Banner"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
    herobg,
  } = data

  return (
    <Layout>
      <SEO
        title="ITCompass | Information Technology At Your Fingertip"
        description="ITCompass is dedicated to bringing the world quality Information and Communications Technology News, Tech Trends, Gadget Reviews, Software, App and Web Development Content, Blog Posts."
      />
      <StyledHero home="true" img={herobg.childImageSharp.fluid}>
        <div className="hero-center">
          <Banner
            welcome="welcome to itcompass"
            title="App & Web Development To Deployment."
            info="Tech Trends, Gadget Reviews, Software,  Dev & DevOps Blog Posts."
            showIcon
            className="hero-info hero-underline"
          ></Banner>
        </div>
      </StyledHero>
      <Reveal>
        <Blogs blogs={blogs} title="latest posts" showLink />
      </Reveal>
      <Contact />
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
    herobg: file(relativePath: { eq: "itcompass-background.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
