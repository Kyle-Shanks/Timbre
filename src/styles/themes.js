import { colors, shades } from 'src/styles/palette';

export const LIGHT = 'light';
export const DARK = 'dark';

const sharedColors = {
    success: colors.green,
    warning: colors.yellow,
    error: colors.red,

    primary: colors.teal,
};

// TODO: Update buttonPrimaryHoverBackground for each

export const THEMES = {
    [LIGHT]: {
        ...sharedColors,
        background: shades.white,
        backgroundActive: shades.grey20,

        textPrimary: shades.grey70,
        textSecondary: shades.grey50,
        textDisabled: shades.grey30,
        textPlaceholder: shades.grey40,
        textDisabledPlaceholder: shades.grey20,

        filledInputBackground: shades.grey10,
        filledInputHoverBackground: shades.grey20,
        filledInputDisabledBackground: shades.grey5,

        border: shades.grey40,
        borderDisabled: shades.grey20,
        borderHover: shades.grey50,
        borderActive: colors.blue,

        icon: shades.grey40,
        iconHover: shades.grey60,
        iconActive: shades.grey60,

        buttonPrimaryBackground: colors.teal,
        buttonPrimaryHoverBackground: colors.teal,
    },
    [DARK]: {
        ...sharedColors,
        // background: shades.grey90,
        background: shades.grey80,
        backgroundActive: shades.grey60,

        textPrimary: shades.grey10,
        textSecondary: shades.grey40,
        textDisabled: shades.grey60,
        textPlaceholder: shades.grey50,
        textDisabledPlaceholder: shades.grey70,

        filledInputBackground: shades.grey70,
        filledInputHoverBackground: shades.grey60,
        filledInputDisabledBackground: shades.grey80,

        border: shades.grey50,
        borderDisabled: shades.grey60,
        borderHover: shades.grey40,
        borderActive: colors.blue,

        icon: shades.grey50,
        iconHover: shades.grey30,
        iconActive: shades.grey30,

        buttonPrimaryBackground: colors.teal,
        buttonPrimaryHoverBackground: colors.teal,
    },
};
