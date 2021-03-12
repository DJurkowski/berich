import React, { useState } from 'react';

import { SliderContainer, SliderPrevArrow, SliderNextArrow, SlideWrapper, SlideInfo, BgWrap, IconWrapp, Icon } from './SliderElements';

const Slider = ({slides}) => {

    const [ current, setCurrent ] = useState(0);
    const length = slides.length;

    const handlePrevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    const handleNextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    if(!Array.isArray([slides]) || slides.length <= 0) {
        return <SliderContainer><SlideInfo>No data avaliable</SlideInfo></SliderContainer>
    }

    return (
        <SliderContainer>
            <SliderPrevArrow onClick={handlePrevSlide}/>
            {slides.map((slide, index) => 
                index === current &&
                <SlideWrapper image={slide.image} key={index}>
                    <BgWrap />
                    <SlideInfo>
                        {slide.info}
                    </SlideInfo>
                    <IconWrapp>
                        <Icon />
                    </IconWrapp>
                </SlideWrapper>
            )}
            <SliderNextArrow onClick={handleNextSlide}/>
        </SliderContainer>
    );
};

export default Slider;
