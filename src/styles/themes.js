import { colors, shades } from 'src/styles/palette';

export const LIGHT = 'light';
export const DARK = 'dark';

const sharedColors = {
    success: colors.green,
    warning: colors.yellow,
    error: colors.red,

    primary: colors.teal,
};

export const THEMES = {
    [LIGHT]: {
        ...sharedColors,
        background: shades.white,

        primaryText: shades.grey70,
        secondaryText: shades.grey50,
        disabledText: shades.grey30,
        placeholderText: shades.grey40,
        disabledPlaceholderText: shades.grey20,

        border: shades.grey30,
        disabledBorder: shades.grey20,
        hoverBorder: shades.grey40,
        activeBorder: colors.blue,
    },
    [DARK]: {
        ...sharedColors,
        background: shades.grey80,

        primaryText: shades.grey10,
        secondaryText: shades.grey40,
        disabledText: shades.grey60,
        placeholderText: shades.grey50,
        disabledPlaceholderText: shades.grey70,

        border: shades.grey50,
        disabledBorder: shades.grey60,
        hoverBorder: shades.grey40,
        activeBorder: colors.blue,
    },
};
