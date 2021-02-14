import React from 'react';
import PropTypes from 'prop-types';
import { MenuItem, StyledComponent } from './Menu.styled';

// TODO: Should add close on click outside
// TODO: Add handler for then parent is close to the bottom to more menu position to above
// TODO: Convert to accept children (MenuHeader, MenuItem, and MenuDivider) instead of options object?

const Menu = ({ className, open, options, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Menu';

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            open={open}
            {...styleProps}
        >
            {options.map((opt) => (
                <MenuItem key={`Menu_${opt.label}`} onClick={opt.onClick} truncate>
                    {opt.label}
                </MenuItem>
            ))}
        </StyledComponent>
    );
};

Menu.propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            onClick: PropTypes.func.isRequired,
            disabled: PropTypes.bool,
        })
    ).isRequired,
};

Menu.defaultProps = {
    className: '',
    open: false,
};

export default Menu;
