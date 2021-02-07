import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Grid.styled';

// TODO: Fix these props
const Grid = ({ className, children, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Grid';

    return (
        <StyledComponent className={`${BASE_CLASS_NAME} ${className}`.trim()} {...styleProps}>
            {children}
        </StyledComponent>
    );
};

Grid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

Grid.defaultProps = {
    children: null,
    className: '',
};

export default Grid;