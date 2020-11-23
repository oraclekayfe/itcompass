import React from "react"
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaYoutubeSquare,
    FaTwitterSquare,
} from "react-icons/fa"

const data = [
    {
        id: 1,
        icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
        url: "https://www.facebook.com",
    },
    {
        id: 2,
        icon: <FaYoutubeSquare className="social-icon"></FaYoutubeSquare>,
        url: "https://www.youtube.com",
    },
    {
        id: 3,
        icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
        url: "https://www.github.com/oraclekayfe",
    },
    {
        id: 4,
        icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
        url: "https://www.twitter.com",
    },
]
const links = data.map(link => {
    return (
        <li key={link.id}>
            <a
                href={link.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                {link.icon}
            </a>
        </li>
    )
})

export default ({ styleClass }) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>
            {links}
        </ul>
    )
}
