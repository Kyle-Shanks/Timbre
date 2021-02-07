import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Container.styled';

/**
 * General purpose Container component
 *
 * Style props:
 * fullWidth - overrides max-width property
 */
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
};

Container.defaultProps = {
    children: null,
    className: '',
};

export default Container;