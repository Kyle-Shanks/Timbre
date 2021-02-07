import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Grid.styled';

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

    template: PropTypes.string,
    rows: PropTypes.string,
    columns: PropTypes.string,
    areas: PropTypes.string,

    gap: PropTypes.string,
    align: PropTypes.string,
    justify: PropTypes.string,
};

Grid.defaultProps = {
    children: null,
    className: '',

    template: '',
    rows: '',
    columns: '',
    areas: '',

    gap: '0rem',
    align: 'normal',
    justify: 'normal',
};

export default Grid;