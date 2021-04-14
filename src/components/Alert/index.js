import React from 'react';
import { Button } from '../Button/ButtonElements';
import { Container, Content, H1, Paragraph, ErrorIcon } from './AlertElements';

const Alert = ({ message, direction }) => (
    
    <Container>
        <Content>
        <ErrorIcon/><H1>Something goes wrong.</H1>
        </Content>
        <Paragraph>Please try again.</Paragraph>
        <Button to={direction}>
            {message}
        </Button>
    </Container>
);

export default Alert;
