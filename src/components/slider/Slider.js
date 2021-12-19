import React, { useState } from 'react';
import { SliderData } from './SliderData'
import styled from "styled-components";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const SliderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  //border: 2px solid black;
  align-items: center;
  justify-content: center;
  margin: 5px auto;
`

const LeftArrow = styled(FaArrowAltCircleLeft)`
  font-size: 4em;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    color: #333333;
  }
`
const RightArrow = styled(FaArrowAltCircleRight)`
  font-size: 4em;
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    color: #333333;
  }
`
const SliderImg = styled.img`
  width: 100%;
  border-radius: 10px;
`
const ImgDiv = styled.div`
  display: ${props => props.show ? 'none' : 'block'};

`

const Slider = ({ slides }) => {

    const [current, setCurrent] = useState(0);
    const length = slides.length;

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
        <SliderContainer>
            <LeftArrow onClick={prevSlide}/>
            {SliderData.map((slide, index) => {
                return (
                    <ImgDiv key={index}>
                        {index === current && (
                            <SliderImg src={slide.image}/>
                        )}
                    </ImgDiv>
                )
            })
            }
            <RightArrow onClick={nextSlide}/>
        </SliderContainer>
    );
};

export default Slider;