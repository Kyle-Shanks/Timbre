import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'src/components/layout/Container';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Container>Hello, world!. This is Timbre.</Container>,
        document.getElementById('root')
    );
});
