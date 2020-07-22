import React, { useState } from "react"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Slider = ({ testimonials }) => {
  const [current, setCurrent] = useState(testimonials[0])

  const [active, setActive] = useState(0)

  const handleSetClick = event => {
    setCurrent(testimonials[event.target.getAttribute("data-quote")])
    setActive(event.target.getAttribute("data-quote"))
  }

  return (
    <SliderContainer>
      {/**Why does current.img not work? How to animate the transition of p  */}
      <img
        src={current.image.file.url}
        alt="portrait"
        height="150px"
        width="150px"
      />
      <p>{current.name}</p>
      <p>{current.credentials}</p>
      {documentToReactComponents(current.content.json)}
      <Dots active={active}>
        {Object.keys(testimonials).map(index => (
          <span
            onClick={event => handleSetClick(event)}
            data-quote={index}
            key={index}
          />
        ))}
      </Dots>
    </SliderContainer>
  )
}

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px auto;
  max-width: 1000px;
  padding: 40px;
  border: 1px solid lightgrey;
  box-shadow: 0 0 3px #ccc;

  img {
    object-fit: contain;
  }

  p {
    text-align: center;
    margin-bottom: 20px;
    color: #7a7979;
    font-family: "Roboto", open sans;
    font-size: 15px;
  }
`

const Dots = styled.div`
  display: flex;

  span {
    height: 20px;
    width: 20px;
    margin: 0 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  span::before {
    content: "";
    height: 6px;
    width: 6px;
    background-color: #d4d4d4;
    border-radius: 50%;
    transition: background-color 0.3 ease;
  }

  span:hover::before {
    background-color: #1cbbd3;
  }

  span[data-quote="${props => props.active}"]::before {
    background-color: #1cbbd3;
  }
`

export default Slider
