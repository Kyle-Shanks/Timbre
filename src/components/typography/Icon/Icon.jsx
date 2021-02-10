import React from 'react';
import PropTypes from 'prop-types';
import Icons from 'src/icons';
import { StyledComponent } from './Icon.styled';

const Icon = ({ className, children, icon, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Icon';
    const fallbackIcon = Icons.CircleHelp;
    const renderedIcon = icon ? Icons[icon] : children;

    return (
        <StyledComponent className={`${BASE_CLASS_NAME} ${className}`.trim()} {...styleProps}>
            {renderedIcon || fallbackIcon}
        </StyledComponent>
    );
};

Icon.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string,
};

Icon.defaultProps = {
    className: '',
    children: null,
    icon: '',
};

export default Icon;