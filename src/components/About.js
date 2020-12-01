import React from "react"
import logo from "../assets/about_itcompass.jpg"
import Title from "./Title"

const About = () => {
    return (
        <section className="about-background">
            <div className="about-section section-center">
                <div className="abt-img">
                    <img src={logo} alt="abt-img" />
                </div>
                <article className="abt-text">
                    <Title title="about" />
                    <p>
                        ITCOMPASS is dedicated to bringing the world the highest
                        quality Information and communications technology news,
                        tech trends, gadget reviews, software, app and web
                        development content and blog. Mobile & Web Development
                        to Deployment, Dev & DevOps Blog post.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About
