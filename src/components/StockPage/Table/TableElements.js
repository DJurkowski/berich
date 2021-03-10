import styled from 'styled-components';

export const TableCointainer = styled.table`
    width: 100%;
    border: none;
    border-spacing: 0;
    padding: 0 40px;
`;

export const TableHeader = styled.thead`
    color: ${({isDarkBg}) => (isDarkBg ? '#fff' : '#000')};
`;

export const TableTHContainer = styled.tr``;

export const TableBody = styled.tbody`
    border: none;
`;

export const TableTH = styled.th`
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;

    @media screen and (max-width: 530px) {
        font-size: 14px;
    }
`;

export const THMartketCap = styled(TableTH)`
    
    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const THVolume = styled(TableTH)`

    @media screen and (max-width: 650px) {
        display: none;
    }
`;

export const THSymbol = styled(TableTH)`

    @media screen and (max-width: 460px) {
        display: none;
    }
`;


