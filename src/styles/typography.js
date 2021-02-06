// Font size constants in rems
const fontSize = {
    xxs: 0.625, // 10px
    xs: 0.75,   // 12px
    s: 0.875,   // 14px
    m: 1,       // 16px
    l: 1.125,   // 18px
    xl: 1.5,    // 24px
    xxl: 2,     // 32px
    splash: 4,  // 64px
};

const fontWeight = {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
}

const lineHeight = {
    s: 1,
    m: 1.2,
    l: 1.4,
    xl: 1.5,
    xxl: 2,
};

export const FONT_SIZE = {
    splash: fontSize.splash,
    h1: fontSize.xxl,
    h2: fontSize.xl,
    h3: fontSize.l,
    h4: fontSize.m,
    p: fontSize.m,
    p2: fontSize.s,
    s: fontSize.xs,
    hl: fontSize.xxs,
};

// TODO: Need to update these
export const FONT_WEIGHT = {
    splash: fontWeight.medium,
    h1: fontWeight.normal,
    h2: fontWeight.normal,
    h3: fontWeight.normal,
    h4: fontWeight.normal,
    p: fontWeight.normal,
    p2: fontWeight.normal,
    s: fontWeight.normal,
    hl: fontWeight.normal,
};

export const LINE_HEIGHT = {
    splash: lineHeight.xxl,
    h1: lineHeight.xxl,
    h2: lineHeight.xl,
    h3: lineHeight.l,
    h4: lineHeight.m,
    p: lineHeight.m,
    p2: lineHeight.s,
    s: lineHeight.s,
    hl: lineHeight.s,
};

// TODO: Need to update these
export const LETTER_SPACING = {
    splash: 0,
    h1: 0,
    h2: 0,
    h3: 0,
    h4: 0,
    p: 0,
    p2: 0,
    s: 0,
    hl: 0,
};
