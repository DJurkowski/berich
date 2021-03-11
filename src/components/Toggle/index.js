import React from 'react';

import { ToggleContainer, ToggleInput, ToggleSlider } from './ToggleElements';

const Toggle = ({ action }) => {
    return (
        <ToggleContainer>
            <ToggleInput id="checkbox" type="checkbox"  onClick={action}/>
            <ToggleSlider htmlFor="checkbox" />
        </ToggleContainer>
    );
};

export default Toggle;
