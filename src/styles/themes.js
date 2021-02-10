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

        filledInputBackground: shades.grey10,
        filledInputHoverBackground: shades.grey20,
        filledInputDisabledBackground: shades.grey5,

        border: shades.grey30,
        disabledBorder: shades.grey20,
        hoverBorder: shades.grey40,
        activeBorder: colors.blue,

        iconColor: shades.grey40,
        iconHoverColor: shades.grey60,
        iconActiveColor: shades.grey60,
    },
    [DARK]: {
        ...sharedColors,
        background: shades.grey80,

        primaryText: shades.grey10,
        secondaryText: shades.grey40,
        disabledText: shades.grey60,
        placeholderText: shades.grey50,
        disabledPlaceholderText: shades.grey70,

        filledInputBackground: shades.grey70,
        filledInputHoverBackground: shades.grey60,
        filledInputDisabledBackground: shades.grey80,

        border: shades.grey50,
        disabledBorder: shades.grey60,
        hoverBorder: shades.grey40,
        activeBorder: colors.blue,

        iconColor: shades.grey50,
        iconHoverColor: shades.grey30,
        iconActiveColor: shades.grey30,
    },
};
