import React, { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const ArticleReveal = ({ children }) => {
  const revealRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      revealRef.current,
      {
        autoAlpha: 0,
      },
      {
        duration: 1,
        autoAlpha: 1,
        ease: "none",
        scrollTrigger: {
          trigger: revealRef.current,
          start: "top center+=100",
          toggleActions: "play none none reverse",
        },
      }
    )
  }, [])

  return <article ref={revealRef}>{children}</article>
}

export default ArticleReveal
