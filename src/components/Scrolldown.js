import React from "react"

const Scrolldown = () => {
    return (
        <div>
            <svg
                width="40px"
                height="100%"
                viewBox="0 0 247 390"
                version="1.1"
                style={{
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-miterlimit": "1.5",
                }}
            >
                <path
                    id="wheel"
                    d="M123.359,79.775l0,72.843"
                    style={{
                        fill: "none",
                        stroke: "#fff",
                        "stroke-width": "20px",
                    }}
                />
                <path
                    id="mouse"
                    d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
                    style={{
                        fill: "none",
                        stroke: "#fff",
                        "stroke-width": "20px",
                    }}
                />
            </svg>
            <p>Scroll down</p>
        </div>
    )
}

export default Scrolldown