import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { SPACING, FONT_WEIGHT, borderRadiusM } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
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
    color: ${({ theme }) => theme.background};
    padding: ${SPACING.xs};
`;
