import img1 from '../../images/AboutSection/aboutsection.svg';
import img2 from '../../images/CryptoSection/cryptosection.svg';

export const aboutSection = {
    id: "about",
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Real-Time Crypto Prices',
    headline: 'Blockchain Data is in Our DNA',
    description: 'Get the latest prices and charts along with key market signals.',
    buttonLabel: 'See Stock',
    imgStart: false,
    img: img1,
    alt: 'About',
    dark: false,
    dark2: true,
    primary: false,
    darkText: true
};

export const cryptoSection = {
    id: "crypto",
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Cryptocurrency is the Future',
    headline: 'What to Know About Cryptocurrency',
    description: 'Cryptocurrency is digital money. That means there’s no physical coin or bill — it’s all online. You can transfer cryptocurrency to someone online without a go-between, like a bank. Bitcoin and Ether are well-known cryptocurrencies, but new cryptocurrencies continue to be created.',
    buttonLabel: 'Get started',
    imgStart: true,
    img: img2,
    alt: 'Crypto',
    dark: true,
    dark2: true,
    primary: true,
    darkText: false
};