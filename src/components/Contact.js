import React from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"

export default class SubscribeForm extends React.Component {
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
            <section className="section-center section deals" id="deals">
                <div className="title-wrapper">
                    <h3>Get Notified of New Tutorials & Blog Posts</h3>
                </div>
                <form
                    name="subscribeForm"
                    method="POST"
                    id="subscribe-form"
                    onSubmit={this.handleSubmit}
                >
                    <div
                        className="message"
                        dangerouslySetInnerHTML={{ __html: this.state.message }}
                    />
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="your email will not be shared!"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                        <button type="submit" className="btn-submit">
                            Go!
                        </button>
                    </div>
                </form>
            </section>
        )
    }
}
