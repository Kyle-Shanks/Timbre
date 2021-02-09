import { colors, shades } from 'src/styles/palette';

export const LIGHT = 'light';
export const DARK = 'dark';

const sharedColors = {
    success: colors.green,
    warning: colors.yellow,
    error: colors.red,

    primary: colors.teal,
};

export const lightTheme = {
    ...sharedColors,
    background: shades.white,

    primaryText: shades.grey70,
    secondaryText: shades.grey50,
};

export const darkTheme = {
    ...sharedColors,
    background: shades.grey80,

    primaryText: shades.grey10,
    secondaryText: shades.grey40,
};
