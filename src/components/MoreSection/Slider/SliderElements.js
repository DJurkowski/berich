import styled from 'styled-components';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import { GiClick } from 'react-icons/gi';

export const SliderContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
`;

export const SliderPrevArrow = styled(FaArrowAltCircleLeft)`
    position: absolute;
    color: #fff;
    top: 50%;
    left: 32px;
    font-size: 2.5rem;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    transition: all 0.2s ease-in-out;

    &:hover {
        color: #06DE9C;
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 365px) {
        left: 10px;
    }
`;

export const SliderNextArrow = styled(FaArrowAltCircleRight)`
    position: absolute;
    color: #fff;
    top: 50%;
    right: 32px;
    font-size: 2.5rem;
    z-index: 10;
    cursor: pointer;
    user-select: none;

    transition: all 0.2s ease-in-out;

    &:hover {
        color: #06DE9C;
        transform: scale(1.2);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 365px) {
        right: 10px;
    }
`;

export const SlideInfo = styled.div`
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0, 0.6);
    font-weight: bold;
    border: 3px solid #f1f1f1;
    color: #fff;
    border-radius: 10px;
    filter: opacity(100%);
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, -50%);
    width: 80%;
    padding: 20px;
    text-align: center;
 
    @media screen and (max-width: 600px){
        display: none;
    }
`;

export const IconWrapp = styled.div`
    display: none;

    @media screen and (max-width: 600px) {
        display: block;
        color: white;
        position: absolute;
        opacity: 84%;
        top: 38%;
        left: 32%;
        z-index: 2;
        padding: 10px;
        border: 3px solid #fff;
        border-radius: 50%;
    }
`;

export const Icon = styled(GiClick)`
    color: white;
    font-size: 3rem;
`;

export const SlideWrapper = styled.div`
    background-image: url(${({image}) => (image)});
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 400px;
    width: 600px;
    border-radius: 10px;
    border: 3px solid #fff;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 800px) {
        height: 400px;
        width: 400px;
    }

    @media screen and (max-width: 600px) {
        height: 300px;
        width: 200px;

        &:hover ${SlideInfo} {
            display: block;
            height: 100%;
            width: 100%;
            border: none;
            overflow: auto;
            overflow-x: hidden;
            word-wrap: break-word;
        }

        &:hover ${IconWrapp} {
            display: none;
        }
    }
`;

export const BgWrap = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    filter: opacity(20%);
    background: black;
    z-index: 1;
`;



