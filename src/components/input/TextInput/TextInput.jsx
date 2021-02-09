import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './TextInput.styled';

const VARIATION = ['primary', 'secondary'];

// TODO: Implement variation styles
const TextInput = ({ className, disabled, onChange, value, ...styleProps }) => {
    const BASE_CLASS_NAME = 'TextInput';

    const handleChange = (e) => {
        if (!disabled) onChange(e.target.value);
    };

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            tag="input"
            disabled={disabled}
            onChange={handleChange}
            value={value}
            {...styleProps}
        />
    );
};

TextInput.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string.isRequired,
    variation: PropTypes.oneOf(VARIATION),
};

TextInput.defaultProps = {
    className: '',
    disabled: false,
    error: false,
    onChange: () => {},
    variation: VARIATION[0],
};

export default TextInput;