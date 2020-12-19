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
                        itcompass is dedicated to bringing the world quality
                        information and communications technology news, tech
                        trends, gadget reviews, software, app and web
                        development content, mobile & web development to
                        deployment, dev & devops blog posts.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default About
