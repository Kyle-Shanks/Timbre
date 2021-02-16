import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { MenuItem, StyledComponent } from './Menu.styled';

// TODO: Add handler for then parent is close to the bottom to more menu position to above
// TODO: Convert to accept children (MenuHeader, MenuItem, and MenuDivider) instead of options object?
// TODO: Need to add icon support for items

const Menu = ({ className, onClose, open, options, ...styleProps }) => {
    const BASE_CLASS_NAME = 'Menu';

    // Handling closing the dropdown when clicking outside of the component
    const containerRef = useRef();
    const handleClick = e => {
        if (open && document.contains(e.target) && !containerRef.current.contains(e.target)) {
            onClose();
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [open]);

    return (
        <StyledComponent
            className={`${BASE_CLASS_NAME} ${className}`.trim()}
            open={open}
            ref={containerRef}
            {...styleProps}
        >
            {options.map((opt) => (
                <MenuItem
                    key={`Menu_${opt.label}`}
                    disabled={opt.disabled}
                    onClick={() => { if (!opt.disabled) opt.onClick(); }}
                    truncate
                >
                    {opt.label}
                </MenuItem>
            ))}
        </StyledComponent>
    );
};

Menu.propTypes = {
    className: PropTypes.string,
    open: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
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
