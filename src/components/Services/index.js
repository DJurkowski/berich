import React from 'react';
import Icon1 from '../../images/Services/token.svg';
import Icon2 from '../../images/Services/blockchain.svg';
import Icon3 from '../../images/Services/wallet.svg';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer id="knowhow">
            <ServicesH1>Know How</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}></ServicesIcon>
                    <ServicesH2>What is a token?</ServicesH2>
                    <ServicesP>“Token” is a word that you hear a lot in cryptocurrency. In fact, you might hear Bitcoin described as a “crypto token” or something similar, because — technically — all cryptoassets can also be described as tokens.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}></ServicesIcon>
                    <ServicesH2>What is a blockchain?</ServicesH2>
                    <ServicesP>At its most basic, a blockchain is a list of transactions that anyone can view and verify. The Bitcoin blockchain, for example, contains a record of every time someone sent or received bitcoin.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}></ServicesIcon>
                    <ServicesH2>What is a crypto wallet?</ServicesH2>
                    <ServicesP>Crypto wallets store your private keys, keeping your crypto safe and accessible. They also allow you to send, receive, and spend cryptocurrencies like Bitcoin and Ethereum.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
};

export default Services;
