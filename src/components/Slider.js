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
      <div className="testi-container">
        <img
          src={current.image.file.url}
          alt="portrait"
          height="150px"
          width="150px"
        />
        <p>
          <strong>{current.name}</strong>
        </p>
        <p>
          <em>{current.credentials}</em>
        </p>
        <div className="testi-quote">
          {documentToReactComponents(current.content.json)}
        </div>
      </div>
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

  .testi-container {
    display: inherit;
    flex-direction: inherit;
    align-items: inherit;
    flex-grow: 1;
  }

  .testi-quote {
    margin-top: 25px;
    p {
      color: #66686a;
    }
  }

  img {
    object-fit: contain;
  }

  p {
    text-align: center;
    margin-bottom: 20px;
    color: #a1a5a9;
    font-family: "Roboto", open sans;
    font-size: 15px;
    margin: 0;
  }
`

const Dots = styled.div`
  display: flex;
  margin-top: 25px;

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
