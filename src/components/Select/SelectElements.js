import styled from 'styled-components';

export const DropDownContainer = styled.div`
    width: 168px;
    margin: 0 auto;
    position: absolute;
    ${({leftSide}) => (leftSide ? 'left: 20px' : 'right: 0')};
    bottom: 0;

    @media screen and (max-width: 540px) {
       width: 140px;
    }
`;

export const SelectLabel = styled.h4`
    margin-bottom: 10px;
    font-size: ${({size}) => (size ? '14px' : '16px')};

    @media screen and (max-width: 540px) {
        font-size: 14px;
    }
`;

export const DropDownHeader = styled.div`
    margin-bottom: 0.8em;
    padding: 0.4em 2em 0.4em 1em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    font-weight: 500;
    font-size: ${({size}) => (size ? '15px' : '19px')};
    background-color: ${({dark}) => (dark ? '#f9f9f9' : '#010606')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    cursor: pointer;

    @media screen and (max-width: 540px) {
        font-size: 14px;
    }
`;

export const DropDownListContainer = styled.div`
    position: relative;
`;

export const DropDownList = styled.ul`
    position: absolute;
    width: 168px;
    padding: 0;
    margin: 0;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    background-color: ${({dark}) => (dark ? '#f9f9f9' : '#010606')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({size}) => (size ? '15px' : '19px')};
    font-weight: 500;
    cursor: pointer;

    @media screen and (max-width: 540px) {
        width: 140px;
        font-size: 14px;

    }
`;

export const ListItem = styled.li`
    list-style: none;
    padding: 10px 0 0.5em 0.8em;

    &:hover {
        background: ${({dark}) => (dark ? 'rgba(6, 222, 156, 0.4)' : 'rgba(6, 222, 156, 0.3)')} ;
    }
`;
 