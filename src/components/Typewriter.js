import React from "react"
import Typewriter from "typewriter-effect"

const MyTypewriter = () => {
    return (
        <div className="typewriter">
            <Typewriter
                onInit={typewriter => {
                    typewriter
                        .pauseFor(2500)
                        .typeString(
                            "Trendings<strong> Mobile, Web, DevOps</strong> development to deployment tutorials & reviews "
                        )
                        .pauseFor(1000)
                        .deleteChars(21)
                        .typeString(
                            ", <strong> A+</strong>, <strong> N+</strong>, <strong> CCNA</strong>, & <strong> CCNP</strong> tutorials & reviews "
                        )
                        .pauseFor(2000)
                        .deleteChars(21)
                        .typeString(
                            ", <strong> Graphics Design</strong> & <strong> 2D </strong>,<strong> 3D </strong>Animation tutorials & development trend reviews "
                        )
                        .pauseFor(2000)
                        .deleteChars(39)
                        .typeString(
                            ', Informative & entertaining <strong><span style="color: #f99500;">DIY Blog Posts.</span></strong> '
                        )
                        .pauseFor(3000)
                        .start()
                }}
            />
        </div>
    )
}

export default MyTypewriter
