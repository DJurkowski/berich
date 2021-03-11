import React from 'react';
import { PaginationContainer, CurrentPage, Button } from './PaginationElements';

const Pagination = ({action, currentPage, dark }) => {
    return (
        <PaginationContainer>
            <Button disabled={currentPage === 1} onClick={()=> action(currentPage-1)} dark={dark}>Previous</Button>
            <CurrentPage dark={dark}>{currentPage}</CurrentPage>
            <Button onClick={()=> action(currentPage+1)} dark={dark}>Next</Button>
        </PaginationContainer>
    );
};

export default Pagination;
