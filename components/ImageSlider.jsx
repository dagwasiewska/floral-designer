import React, { useState } from "react"
import { SliderData } from "./SliderData"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"
import Image from "next/image"



const ImageSlider = () => {
 
  const [current, setCurrent] = useState(0)
  // const length = slides.length
  const slides = SliderData
  const length = slides ? slides.length : 0

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow fill-green-900 opacity-60 hover:opacity-100" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow fill-green-900 opacity-60 hover:opacity-100" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Image src={slide.image} width="400px" height="600px" alt="img" className="" />
            )}
          </div>
        )
      })}
    </section>
    
  )
}

export default ImageSlider
