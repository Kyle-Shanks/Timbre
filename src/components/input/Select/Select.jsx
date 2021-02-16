import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from 'src/components/layout/Box';
import Menu from 'src/components/display/Menu';
import { StyledComponent, PlaceholderLabel, ArrowIcon } from './Select.styled';

const Select = ({ className, disabled, error, placeholder, onChange, options, value, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Select';
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const getValueLabel = (val) => options.find((opt) => opt.value === val).label;

    const handleUpdate = (val) => {
        if (!disabled) onChange(val);
    };

    return (
        <Box
            display="inline-block"
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            {...styleProps}
        >
            <StyledComponent
                className={isMenuOpen ? 'is-focused' : '' }
                disabled={disabled}
                error={error}
                onClick={() => { if (!disabled) setIsMenuOpen(!isMenuOpen) }}
            >
                {value
                    ? getValueLabel(value)
                    : <PlaceholderLabel disabled={disabled}>{placeholder}</PlaceholderLabel>
                }
                <ArrowIcon icon="ChevronDown" />
            </StyledComponent>
            <Menu
                open={isMenuOpen}
                onClose={() => { setIsMenuOpen(false) }}
                options={options.map((opt) => ({
                    label: opt.label,
                    onClick: () => {
                        handleUpdate(opt.value);
                        setIsMenuOpen(false);
                    },
                    disabled: opt.disabled
                }))}
            />
        </Box>
    );
};

Select.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            value: PropTypes.string.isRequired,
            disabled: PropTypes.bool,
        })
    ).isRequired,
    value: PropTypes.string.isRequired,
};

Select.defaultProps = {
    className: '',
    disabled: false,
    error: false,
    placeholder: 'Select option...',
};

export default Select;
