import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Box.styled';

const Box = ({ className, children, component: Component }) => {
    const BASE_CLASS_NAME = 'Box';

    return (
        <StyledComponent as={Component} className={`${BASE_CLASS_NAME} ${className}`.trim()}>
            {children}
        </StyledComponent>
    );
};

Box.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};

Box.defaultProps = {
    children: null,
    className: '',
    component: 'div',
};

export default Box;
