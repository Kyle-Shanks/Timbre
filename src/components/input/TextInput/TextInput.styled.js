import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { SPACING, borderWidth, borderRadiusM, defaultTransition } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
    padding: ${SPACING.s} ${SPACING.m};
    color: ${({ theme, disabled }) => disabled ? theme.disabledText : theme.primaryText};
    background-color: ${({ theme }) => theme.background};
    border: ${({ theme, disabled, error }) => {
        if (disabled) return `${borderWidth} solid ${theme.disabledBorder}`
        return `${borderWidth} solid ${error ? theme.error : theme.border}`
    }};
    border-radius: ${borderRadiusM};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'auto'};

    &::placeholder {
        transition: ${defaultTransition};
        color: ${({ theme, disabled }) => disabled ? theme.disabledPlaceholderText : theme.placeholderText};
    }

    &:hover {
        border: ${({ theme, disabled, error }) => {
            if (disabled) return `${borderWidth} solid ${theme.disabledBorder}`
            return `${borderWidth} solid ${error ? theme.error : theme.hoverBorder}`
        }};
    }

    &:focus {
        border: ${({ theme, error }) => `${borderWidth} solid ${error ? theme.error : theme.activeBorder}`};
        box-shadow: 0 0 0 1px ${({ theme, error }) => (error ? theme.error : theme.activeBorder)};
    }
`;
