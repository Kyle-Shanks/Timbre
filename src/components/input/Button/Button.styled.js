import styled from 'styled-components';
import Flex from 'src/components/layout/Flex';
import Box from 'src/components/layout/Box';
import { SPACING, FONT_WEIGHT, borderRadiusM } from 'src/styles/constants';

export const StyledComponent = styled(Flex)`
    cursor: pointer;
    min-width: ${({ variation }) => variation === 'icon' ? '0rem' : `6rem`};
    padding: ${({ variation }) => variation === 'icon' ? SPACING.xs : `${SPACING.s} ${SPACING.m}`};
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
    font-weight: ${FONT_WEIGHT.semibold};
    border-radius: ${borderRadiusM};

    & svg {
        transition: color 0s;
        color: ${({ theme }) => theme.background};
    }

    &:hover {
        background-color: ${({ theme }) => theme.primary+'d0'};
    }
`;

export const Label = styled(Box)`
    padding: ${SPACING.xs};
`;
