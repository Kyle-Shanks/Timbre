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
    tag: PropTypes.elementType,

    // Style Props
    h: PropTypes.string,
    w: PropTypes.string,
    margin: PropTypes.string,
    padding: PropTypes.string,
    fontSize: PropTypes.string,
};

Box.defaultProps = {
    children: null,
    className: '',
    tag: 'div',

    // Style Props
    h: '',
    w: '',
    margin: '',
    padding: '',
    fontSize: '',
};

export default Box;
