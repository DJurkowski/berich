import React from 'react';
import { SliderData } from '../../utils/Data/SliderData';
import { MoreContainer, MoreH1 } from './MoreElements';
import Slider from './Slider';

const MoreSection = () => {
    return (
        <MoreContainer id="more">
            <MoreH1>Learn More</MoreH1>
            <Slider slides={SliderData} />
        </MoreContainer>
    );
};

export default MoreSection;
