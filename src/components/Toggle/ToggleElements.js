import styled from 'styled-components';

export const ToggleContainer = styled.label`
    position: relative;
`;

export const ToggleSlider = styled.label`
    position: absolute;
    top: 0;
    left: 0;
    width: 42px;
    height: 26px;
    border-radius: 15px;
    
    background-color: #000;
    cursor: pointer;

    &::after {
        content: "";
        display: block;
        border-radius: 50%;
        width: 18px;
        height: 18px;
        margin: 4px;
        border: none;
        
        background-color: #fff;
        box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
        transition: 0.4s;
    }
`;

export const ToggleInput = styled.input`
    opacity: 0;
    z-index: 1;
    border-radius: 15px;
    width: 42px;
    height: 26px;

    &:checked + ${ToggleSlider} {
        
        background: #fff;

        &::after {
            content: "";
            display: block;
            border-radius: 50%;
            border: none;
            width: 18px;
            height: 18px;
            margin-left: 20px;
            background: black;
            box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
            transition: 0.4s;
        }
    }
`;
