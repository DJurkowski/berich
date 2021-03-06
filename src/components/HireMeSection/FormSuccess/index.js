import React from 'react';
import Img1 from '../../../images/SuccessForm/success.svg';
import { FormSuccessContainer, SuccessH1, SuccessImageWrapper, SuccessImg } from './FormSuccessElements';

const FromSuccess = () => {
    return (
        <FormSuccessContainer>
            <SuccessH1>We have received your message!</SuccessH1>
            <SuccessImageWrapper>
                <SuccessImg src={Img1} alt="success" />
            </SuccessImageWrapper>
        </FormSuccessContainer>
    );
};

export default FromSuccess;
