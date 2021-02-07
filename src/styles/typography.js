// Font size constants in rems
const fontSize = {
    xxs: 0.625, // 10px
    xs: 0.75,   // 12px
    s: 0.875,   // 14px
    m: 1,       // 16px
    l: 1.5,     // 24px
    xl: 2,      // 32px
    xxl: 3,     // 48px
    xxxl: 4,    // 72px
};

const fontWeight = {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
};

const letterSpacing = {
    sub2: -1,
    sub1: -0.5,
    none: 0,
    s: 0.5,
    m: 1,
    l: 2,
};

export const FONT_SIZE = {
    h1: fontSize.xxxl,
    h2: fontSize.xxl,
    h3: fontSize.xl,
    h4: fontSize.l,
    h5: fontSize.m,
    h6: fontSize.s,
    p: fontSize.m,
    p2: fontSize.s,
};

export const FONT_WEIGHT = {
    h1: fontWeight.bold,
    h2: fontWeight.bold,
    h3: fontWeight.bold,
    h4: fontWeight.bold,
    h5: fontWeight.bold,
    h6: fontWeight.bold,
    p: fontWeight.normal,
    p2: fontWeight.normal,
};

export const LETTER_SPACING = {
    h1: letterSpacing.sub2,
    h2: letterSpacing.sub1,
    h3: letterSpacing.sub1,
    h4: letterSpacing.none,
    h5: letterSpacing.none,
    h6: letterSpacing.none,
    p: letterSpacing.none,
    p2: letterSpacing.none,
};
