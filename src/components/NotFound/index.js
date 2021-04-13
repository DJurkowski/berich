import React from 'react';
import { Container, Content, H1, Paragraph, ErrorIcon } from './NotFoundElements';

const NotFound = () => {
    return (
        <Container>
            <Content>
            <ErrorIcon/><H1> Page Not Found</H1>
            </Content>
            <Paragraph>Sorry for the issue</Paragraph>
        </Container>
    );
};

export default NotFound;
