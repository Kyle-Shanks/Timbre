import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Text.styled';

const ALIGN = ['left', 'center', 'right'];
const VARIATION = ['primary', 'secondary'];

const Text = ({ children, className, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Text';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            tag="p"
            {...styleProps}
        >
            {children}
        </StyledComponent>
    );
};

Text.propTypes = {
    align: PropTypes.oneOf(ALIGN),
    children: PropTypes.node,
    className: PropTypes.string,
    inline: PropTypes.bool,
    truncate: PropTypes.bool,
    variation: PropTypes.oneOf(VARIATION),
};

Text.defaultProps = {
    align: ALIGN[0],
    children: null,
    className: '',
    inline: false,
    truncate: false,
    variation: VARIATION[0],
};

export default Text;
