import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { relaInline, ellipsisStyles } from 'src/styles/util';
import {
    FONT_SIZE,
    FONT_WEIGHT,
    LETTER_SPACING,
} from 'src/styles/typography';

const variationStyles = {
    primary: {
        fontSize: FONT_SIZE.p,
        fontWeight: FONT_WEIGHT.p,
        letterSpacing: LETTER_SPACING.p,
    },
    secondary: {
        fontSize: FONT_SIZE.p2,
        fontWeight: FONT_WEIGHT.p2,
        letterSpacing: LETTER_SPACING.p2,
    },
};

export const StyledComponent = styled(Box)`
    ${({ inline }) => inline && relaInline}
    color: ${({ theme, variation }) => variation === 'primary' ? theme.primaryText : theme.secondaryText};
    font-size: ${({ variation }) => variationStyles[variation].fontSize}rem;
    font-weight: ${({ variation }) => variationStyles[variation].fontWeight};
    letter-spacing: ${({ variation }) => variationStyles[variation].letterSpacing}px;
    text-align: ${({ align }) => align};
    line-height: 1.4;
    ${({ truncate }) => truncate && ellipsisStyles}
`;
