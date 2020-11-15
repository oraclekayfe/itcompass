import React from "react"

const Subscribe = () => {
    return (
        <div className="newsletter-form">
            <h3>Get Notified of New Tutorials & Blog Posts</h3>
            <form action="https://formspree.io/f/xjvprnqq" method="POST">
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email..."
                        className="form-control"
                    />
                </div>
                <button type="submit" className="btn subscribe-btn">
                    Subscribe
                </button>
            </form>
            <p>Your Email Address will Never Be Shared</p>
        </div>
    )
}

export default Subscribe
