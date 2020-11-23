import React from "react"
import logo from "../assets/g1640.png"
import { Link } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class Footer extends React.Component {
    state = {
        email: "",
        responseMessage: "",
    }
    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value,
        })
    }
    handleSubmit = async e => {
        e.preventDefault()
        const result = await addToMailchimp(this.state.email)
        this.setState({ message: result.msg })
    }
    render() {
        return (
            <footer id="main-footer">
                <div className="footer-container section-center">
                    <div className="logoPart">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <SocialLinks />
                        <div>
                            <p>
                                Copyright &copy; ITCOMPASS.IO 2020, All Rights
                                Reserved
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3>Email Newsletter</h3>
                        <p>Get notified of new tutorial & blog posts.</p>
                        <form
                            name="contact"
                            method="POST"
                            onSubmit={this.handleSubmit}
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: this.state.message,
                                }}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email will not be shared"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                            <input
                                type="submit"
                                value="Subscribe"
                                className="btn btn-primary"
                            />
                        </form>
                    </div>
                    <div>
                        <h3>Site Links</h3>
                        <ul className="list">
                            <li>
                                <Link to="/blog/">Blog</Link>
                            </li>
                            <li>
                                <Link to="/about/">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}
