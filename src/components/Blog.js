import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const Blog = ({ id, title, image, date, category, slug, desc }) => {
    return (
        <AniLink fade to={`/blogs/${slug}`} className="blog" key={id}>
            <article>
                {image && (
                    <Image
                        fluid={image.childImageSharp.fluid}
                        className="blog-img"
                    />
                )}
                <div className="blog-card">
                    <h4>{title}</h4>
                    <p>{desc}</p>
                    <div className="blog-footer">
                        <p>{category}</p>
                        <p>{date}</p>
                    </div>
                </div>
            </article>
        </AniLink>
    )
}

Blog.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
}

export default Blog
