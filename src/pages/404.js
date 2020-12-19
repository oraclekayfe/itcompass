import React from "react"
import Layout from "../components/Layout"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Contact from "../components/Contact.js"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <Layout>
      <SEO title="404" description="This is our 404 page." />
      <main className="error-page">
        <div className="error-container">
          <h1>oops it's a dead end</h1>
          <AniLink fade to="/" className="btn">
            back home
          </AniLink>
        </div>
      </main>
      <Contact />
    </Layout>
  )
}

export default Error
