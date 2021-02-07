import React from 'react';
import PropTypes from 'prop-types';
import { StyledComponent } from './Header.styled';

const ALIGN = ['left', 'center', 'right'];
const TAG = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const Header = ({ children, className, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Header';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            {...styleProps}
        >
            {children}
        </StyledComponent>
    );
};

Header.propTypes = {
    align: PropTypes.oneOf(ALIGN),
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOf(TAG),
    truncate: PropTypes.bool,
};

Header.defaultProps = {
    align: ALIGN[0],
    children: null,
    className: '',
    tag: TAG[0],
    truncate: false,
};

export default Header;
