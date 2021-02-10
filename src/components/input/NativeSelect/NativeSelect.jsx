import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './NativeSelect.styled';

const NativeSelect = ({ className, disabled, onChange, options, value, ...styleProps }) => {
    const BASE_CLASS_NAME = 'NativeSelect';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            tag="select"
            disabled={disabled}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...styleProps}
        >
            {options.map((opt, idx) => (
                <option value={opt.value} key={`option_${idx}`}>{opt.label}</option>
            ))}
        </StyledComponent>
    );
};

NativeSelect.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
        })
    ).isRequired,
    value: PropTypes.string.isRequired,
};

NativeSelect.defaultProps = {
    className: '',
    disabled: false,
    error: false,
    onChange: () => {},
};

export default NativeSelect;