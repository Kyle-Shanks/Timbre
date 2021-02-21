import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import Icon from 'src/components/typography/Icon';
import Text from 'src/components/typography/Text';
import { SPACING, FONT_WEIGHT } from 'src/styles/constants';
import { relaBlock, absCenter } from 'src/styles/util';

export const StyledComponent = styled(Box)`
    ${relaBlock}
    padding: ${SPACING.m} ${SPACING.l} ${SPACING.m} ${SPACING.xl};
    background-color: ${({ theme, type }) => theme[type]}30;
    color: ${({ theme }) => theme.textPrimary};
`;

export const AlertIcon = styled(Icon)`
    ${absCenter}
    left: ${SPACING.ml};

    & > svg {
        color: ${({ theme, type }) => theme[type]};
    }
`;

export const AlertTitle = styled(Text)`
    font-weight: ${FONT_WEIGHT.semibold};
    margin-right: ${SPACING.s};
`;

export const AlertDescription = styled(Text)``;
