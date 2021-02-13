import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'src/components/layout/Flex'
import { StyledComponent, CheckboxSvg } from './Checkbox.styled';

// TODO: Should try to add box-shadow outline when focused

const Checkbox = ({ className, children, disabled, onChange, value, theme, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Checkbox';

    const handleClick = () => {
        if (!disabled) onChange(!value)
    };

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            disabled={disabled}
            theme={theme}
            onClick={handleClick}
            {...styleProps}
        >
            <Flex>
                <CheckboxSvg
                    tag="svg"
                    viewBox="0 0 60 60"
                    selected={value}
                    disabled={disabled}
                    theme={theme}
                >
                    <rect x="3" y="1.5" width="54" height="54" rx="8" />
                    <path d="M 18.6 31 L 25.7 37.5 L 42.4 20" />
                </CheckboxSvg>
                {children}
            </Flex>
        </StyledComponent>
    );
};

Checkbox.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.bool.isRequired,
};

Checkbox.defaultProps = {
    className: '',
    children: null,
    disabled: false,
};

export default Checkbox;
