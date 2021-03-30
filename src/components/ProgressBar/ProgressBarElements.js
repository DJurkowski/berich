import styled from 'styled-components';

export const BarContainer = styled.div`
    height: 5px;
    width: 50%;
    margin: 0 5px;
    position: relative;
`;

export const BaseBox = styled.div`
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 7px;
    transition: width 3s ease-in-out;
`;

export const Background = styled(BaseBox)`
    background: #cfd6e4;
    width: 100%;
`;

export const Progress = styled(BaseBox)`
    background: #58667e;
    width: ${({ percent }) => percent}%;
`;



