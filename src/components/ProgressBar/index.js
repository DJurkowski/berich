import React from 'react';
import { BarContainer, Background, Progress } from './ProgressBarElements';

const ProgressBar = ({low, high}) => {
    return (
        <BarContainer>
            <Background />
            <Progress percent={(low/high)*100}/>
        </BarContainer>
    );
};

export default ProgressBar;
