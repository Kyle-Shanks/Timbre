import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Container.styled';

// General purpose Container component
const Container = ({ className, children, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Container';

    return (
        <StyledComponent className={`${BASE_CLASS_NAME} ${className}`.trim()} {...styleProps}>
            {children}
        </StyledComponent>
    );
};

Container.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    fullWidth: PropTypes.bool,
};

Container.defaultProps = {
    children: null,
    className: '',
    fullWidth: false,
};

export default Container;