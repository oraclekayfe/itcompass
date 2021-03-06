import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"
import styles from "../css/banner.module.css"

const Banner = ({ title, info, children, showIcon }) => {
  const svgRef = useRef(null)
  const strText = title.split("")
  const revealRefs = useRef([])

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        {
          autoAlpha: 0,
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          stagger: 0.2,
        }
      )
    })
  }, [])

  useEffect(() => {
    gsap.from(svgRef.current, {
      xPercent: -20,
      opacity: 0,
      stagger: 0.2,
      duration: 2,
      ease: "back",
      scale: 3,
      delay: 1,
    })
  }, [])

  const addToRefs = el => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el)
    }
    console.log(revealRefs.current)
  }

  return (
    <div className={styles.banner}>
      <div className={styles.underline}></div>
      <h1>
        {strText.map((el, index) => {
          return (
            <span className="fade" key={index} ref={addToRefs}>
              {el}
            </span>
          )
        })}
      </h1>
      <p>{info}</p>
      {showIcon ? (
        <div ref={svgRef} className="scroller">
          <svg
            width="40px"
            height="100%"
            viewBox="0 0 247 390"
            style={{
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-miterlimit": "1.5",
            }}
          >
            <path
              className="circle"
              d="M123.359,79.775l0,72.843"
              style={{
                fill: "none",
                stroke: "#f99500",
                "stroke-width": "20px",
              }}
            />
            <path
              id="mouse"
              d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
              style={{
                fill: "none",
                stroke: "#f99500",
                "stroke-width": "20px",
              }}
            />
          </svg>
        </div>
      ) : (
        ""
      )}
      {children}
    </div>
  )
}

export default Banner
