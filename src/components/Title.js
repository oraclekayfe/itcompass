import React from "react"

const Title = ({ title }) => {
    return (
        <div className="section-center section-title">
            <h2>{title || "default title"}</h2>
            <div className="underline"></div>
        </div>
    )
}

export default Title
