import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { ellipsisStyles } from 'src/styles/util';
import {
    FONT_SIZE,
    FONT_WEIGHT,
    LETTER_SPACING,
} from 'src/styles/typography';

export const StyledComponent = styled(Box)`
    font-size: ${({ tag }) => FONT_SIZE[tag]}rem;
    font-weight: ${({ tag }) => FONT_WEIGHT[tag]};
    letter-spacing: ${({ tag }) => LETTER_SPACING[tag]}px;
    text-align: ${({ align }) => align};
    line-height: 1.4;
    ${({ truncate }) => truncate && ellipsisStyles}
`;
