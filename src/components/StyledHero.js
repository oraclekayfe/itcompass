import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const StyledHero = ({ img, className, children, home }) => {
  return (
    <BackgroundImage className={className} fluid={img} home={home}>
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(95vh - 62px)" : "50vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(33, 116, 156, 1.0), rgba(0, 0, 0, 0.7)) "
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .underline {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
  .hero-welcome {
    color: #f99500;
  }
`
