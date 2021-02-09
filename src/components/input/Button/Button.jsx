import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Button.styled';

const SIZE = ['l', 'm', 's', 'xs'];
const VARIATION = ['primary', 'secondary'];

// TODO: Finish this component
const Button = ({ className, children, disabled, onClick, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Button';

    const handleClick = (e) => { if (!disabled) onClick(e); };

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            tag="button"
            disabled={disabled}
            onClick={handleClick}
            {...styleProps}
        >
            {children}
        </StyledComponent>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,

    // Style props
    size: PropTypes.oneOf(SIZE),
    variation: PropTypes.oneOf(VARIATION),
};

Button.defaultProps = {
    className: '',
    children: null,
    disabled: false,
    onClick: () => {},

    // Style Props
    size: SIZE[1],
    variation: VARIATION[0],
};

export default Button;