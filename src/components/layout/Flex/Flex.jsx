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
    children: PropTypes.node,
    className: PropTypes.string,
};

Flex.defaultProps = {
    children: null,
    className: '',
};

export default Flex;