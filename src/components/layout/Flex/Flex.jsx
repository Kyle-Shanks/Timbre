import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Flex.styled';

const Flex = ({ className, children, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Flex';

    return (
        <StyledComponent className={`${BASE_CLASS_NAME} ${className}`.trim()} {...styleProps}>
            {children}
        </StyledComponent>
    );
};

Flex.propTypes = {
    align: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    direction: PropTypes.string,
    justify: PropTypes.string,
    wrap: PropTypes.string,
};

Flex.defaultProps = {
    align: 'normal',
    children: null,
    className: '',
    direction: 'row',
    justify: 'normal',
    wrap: 'wrap',
};

export default Flex;