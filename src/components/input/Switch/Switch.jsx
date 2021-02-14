import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent, Thumb } from './Switch.styled';

const VARIATION = ['outline', 'filled'];

const Switch = ({ className, disabled, onChange, theme, variation, value, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Switch';
    const handleChange = () => {
        if (!disabled) onChange(!value);
    };

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            disabled={disabled}
            theme={theme}
            variation={variation}
            onClick={handleChange}
            {...styleProps}
        >
            <Thumb
                disabled={disabled}
                value={value}
                theme={theme}
                variation={variation}
            />
        </StyledComponent>
    );
};

Switch.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
    variation: PropTypes.oneOf(VARIATION),
};

Switch.defaultProps = {
    className: '',
    disabled: false,
    variation: VARIATION[0],
};

export default Switch;
