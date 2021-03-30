import styled from 'styled-components';
import { TiAttachment, TiInfo } from 'react-icons/ti';
import { HiCursorClick } from 'react-icons/hi';

export const DetailsContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 250px 1fr 1fr;
    grid-auto-columns: 1fr;
    padding: 20px 40px;
    background-color: ${({dark}) => (dark ? '#010606' : '#f9fafd')};
    color: ${({dark}) => (dark ? '#fff' : '#21232e')};

    @media screen and (max-width: 760px) {
        grid-template-columns: 200px 1fr 1fr;
    }

    @media screen and (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`;

export const ToggleWrappper = styled.div`
    grid-column: 1 / 7 ;
    grid-row: 1 ;
    justify-self: end;
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;

export const ToggleLabel = styled.div`
    display: inline-block;
    margin-right: 10px;
`;

export const Box = styled.div`
    border-radius: 5px;
    padding: 20px;
`;

export const InfoBox = styled(Box)`
    grid-column: 1 / 3 ;
    grid-row: 2 / 4;

    @media screen and (max-width: 700px) {
        grid-column: 1 / 7;
    }
`;
export const PriceBox = styled(Box)`
    grid-column: 3 / 7;
    grid-row: 2;

    @media screen and (max-width: 700px) {
        grid-column: 1 / 7;
        grid-row: 4;
    }
`;
export const DetailsWrapper = styled.div`
    grid-column: 3 / 7;
    display: grid;
    grid-gap: 10px;
    justify-items: end;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    
    @media screen and (max-width: 700px) {
        grid-column: 1 / 7;
        justify-items: start;
    }
`;

export const DetailsBox = styled(Box)`
    color: ${({dark}) => (dark ? '#fff' : '#000')};
`;

export const ChartBox = styled(Box)``;

export const BoxWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
`;

export const BoxWrapperEnd = styled(BoxWrapper)`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 10px;

    @media screen and (max-width: 700px) {
        justify-content: flex-start;
    }
`;

export const Img = styled.img`
    height: 32px;
    margin-right: 5px;
`;

export const Name = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-right: 12px;
`;

export const ItemContainer = styled.div`
    border-radius: 4px;
    padding: 2px 6px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;
    background-color: ${({dark}) => (dark ? '#323546' : '#eff2f5')};
    color: ${({dark}) => (dark ? '#a1a7bb' : '#58667e')};
`;

export const ItemWrap = styled.div`
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 10px;
    font-weight: bold;
    background-color: ${({dark}) => (dark ? '#323546' : '#eff2f5')};
    color: ${({dark}) => (dark ? '#a1a7bb' : '#58667e')};
    word-wrap: none;
    margin: 0 10px 10px 0;
`;

export const Rank = styled.div`
    border-radius: 4px;
    padding: 2px 6px;
    font-size: 10px;
    font-weight: bold;
    background-color: ${({dark}) => (dark ? '#858ca2' : '#808a9d')};
    color: #fff;
    margin: 0 10px 10px 0;
    word-wrap: none;
`;

export const LinksWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const LinkContaier = styled.a`
    cursor: pointer;
    text-decoration: none;
    border-radius: 4px;
    padding: 5px 8px;
    font-size: 12px;
    font-weight: bold;
    background-color: ${({dark}) => (dark ? '#323546' : '#eff2f5')};
    color: ${({dark}) => (dark ? '#fff' : '#000')};
    word-wrap: none;
    margin: 0 10px 10px 0;
    max-width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
        background-color: ${({dark}) => (dark ? '#494d65' : '#dedfe0')};
    }
`;

export const WebIcon = styled(TiAttachment)`
    margin-right: 5px;
`;

export const ClickIcon = styled(HiCursorClick)`
    margin-left: 5px;
`;

export const PriceChange = styled.div`
    color: #fff;
    background-color: ${({price}) => (price > 0 ? '#16c784' : '#ea3943')};
    padding: 5px 10px;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
`;

export const PriceLabel = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    color: ${({dark}) => (dark ? '#a1a7bb' : '#58667e')};

    @media screen and (max-width: 700px) {
        justify-content: flex-start;
    }
`;

export const AnotherPriceLabel = styled.div`
    text-transform: uppercase;
`;

export const ChangePrice = styled.div`
    color: ${({price}) => (price > 0 ? '#16c784' : '#ea3943')};
    margin-left: 5px;
`;

export const DetailsLabel = styled.div`
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    margin-bottom: 5px;
    color: ${({dark}) => (dark ? '#a1a7bb' : '#58667e')};
`;

export const InfoIcon = styled(TiInfo)`
`;

export const DetailsValue = styled.div`
    font-size: 16px;
    line-height: 26px;
    font-weight: bold;
`;

export const DetailsChange = styled.div`
    color: ${({price}) => (price > 0 ? '#16c784' : '#ea3943')};
    font-weight: bold;
`;

export const ProgressWrap = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 700px) {
        justify-content: flex-start;
    }
`;

export const ProgressLabel = styled.div`
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    color: ${({dark}) => (dark ? '#a1a7bb' : '#58667e')};
    white-space: nowrap;
`;