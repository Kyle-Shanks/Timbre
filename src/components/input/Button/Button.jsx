import React from 'react';
import PropTypes from 'prop-types';
import Flex from 'src/components/layout/Flex';
import { StyledComponent, Label } from './Button.styled';

// TODO: Implement size and variation styles
const SIZE = ['l', 'm', 's', 'xs'];
const VARIATION = ['primary', 'secondary', 'tertiary', 'icon'];

const Button = ({
    className,
    children,
    disabled,
    iconLeft,
    iconRight,
    loading,
    loadingText,
    onClick,
    ...styleProps
}) => {
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
            <Flex align="center">
                {!loading && iconLeft}
                <Label>{loading ? loadingText : children}</Label>
                {!loading && iconRight}
            </Flex>
        </StyledComponent>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    disabled: PropTypes.bool,
    iconLeft: PropTypes.node,
    iconRight: PropTypes.node,
    loading: PropTypes.bool,
    onClick: PropTypes.func,

    // Style props
    size: PropTypes.oneOf(SIZE),
    variation: PropTypes.oneOf(VARIATION),
};

Button.defaultProps = {
    className: '',
    children: null,
    disabled: false,
    iconLeft: null,
    iconRight: null,
    loading: false,
    loadingText: 'loading...',
    onClick: () => {},

    // Style Props
    size: SIZE[1],
    variation: VARIATION[0],
};

export default Button;