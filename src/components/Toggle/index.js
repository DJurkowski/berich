import React from 'react';

import { ToggleContainer, ToggleInput, ToggleSlider } from './ToggleElements';

const Toggle = ({ action, side }) => {
    return (
        <ToggleContainer>
            <ToggleInput id="checkbox" type="checkbox" onChange={action} checked={side} />
            <ToggleSlider htmlFor="checkbox" />
        </ToggleContainer>
    );
};

export default Toggle;
