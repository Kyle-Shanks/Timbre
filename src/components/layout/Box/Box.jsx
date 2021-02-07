import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Box.styled';

const Box = ({ className, children, tag: Tag, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Box';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            as={Tag}
            {...styleProps}
        >
            {children}
        </StyledComponent>
    );
};

Box.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    tag: PropTypes.elementType,
};

Box.defaultProps = {
    children: null,
    className: '',
    margin: '',
    padding: '',
    tag: 'div',
};

export default Box;
