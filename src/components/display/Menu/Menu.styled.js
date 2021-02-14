import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import Text from 'src/components/typography/Text';
import { SPACING, Z_INDEX, borderWidth, borderRadiusM } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
    z-index: ${Z_INDEX.menu};
    position: absolute;
    top: calc(100% + ${SPACING.s});
    max-height: 12rem;
    width: 18rem;
    background-color: ${({ theme }) => theme.displayBackground};
    border-radius: ${borderRadiusM};
    overflow: auto;
    box-shadow: 0 4px 12px -1px rgba(0,0,0,0.2), 0 10px 32px -1px rgba(0,0,0,0.1);
    border: ${borderWidth} solid ${({ theme }) => theme.displayBorder};

    // Toggle Styles
    ${({ open }) => open
        ? `opacity: 1; pointer-events: all; transform: scale(1);`
        : `opacity: 0; pointer-events: none; transform: scale(0.8) translate(-2.15rem,-1.25rem);`
    }
`;

export const MenuItem = styled(Text)`
    padding: ${SPACING.s} ${SPACING.m};
    color: ${({ theme }) => theme.textPrimary};
    background-color: ${({ theme }) => theme.displayBackground};

    &:hover {
        cursor: pointer;
        background-color: ${({ theme }) => theme.displayBackgroundActive};
    }
`;
