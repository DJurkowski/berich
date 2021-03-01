import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { Button } from '../Button/ButtonElements';
import InfoStock from '../InfoStock';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroSectionElements';

const HeroSection = () => {

    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Cryptocurrency Prices, Charts and Rankings</HeroH1>
                <HeroP>
                With us you safe time, you will be up to date and more...
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="/stock" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Go to stock { hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            <InfoStock />
        </HeroContainer>
    );
};

export default HeroSection;
