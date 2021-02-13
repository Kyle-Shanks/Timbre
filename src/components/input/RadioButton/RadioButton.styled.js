import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { SPACING, defaultCheckboxSize } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
    display: inline-block;
    color: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
    user-select: ${({ disabled }) => disabled ? 'none' : 'auto'};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    text-decoration: ${({ disabled }) => disabled ? 'line-through' : 'none'};
`;

export const RadioSvg = styled(Box)`
    height: ${defaultCheckboxSize};
    width: ${defaultCheckboxSize};
    margin-right: ${SPACING.xs};
    transition: 0s;

    & > .outline {
        fill: none;
        stroke: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
        stroke-width: 5;
    }

    & > .fill {
        fill: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
        stroke: none;
    }
`;
