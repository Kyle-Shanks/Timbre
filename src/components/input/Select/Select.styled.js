import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import Icon from 'src/components/typography/Icon';
import { relaInline, vertCenter } from 'src/styles/util';
import { SPACING, borderWidth, borderRadiusM } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
    ${relaInline}
    min-width: 16rem;
    padding: ${SPACING.s} ${SPACING.l} ${SPACING.s} ${SPACING.m};
    color: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
    background-color: transparent;
    border: ${({ theme, disabled, error }) => {
        if (error) return `${borderWidth} solid ${theme.error}`;
        return `${borderWidth} solid ${disabled ? theme.borderDisabled : theme.border}`;
    }};
    border-radius: ${borderRadiusM};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};

    &:hover {
        border: ${({ theme, disabled, error }) => {
            if (error) return `${borderWidth} solid ${theme.error}`;
            return `${borderWidth} solid ${disabled ? theme.borderDisabled : theme.borderHover}`;
        }};
    }

    &.is-focused {
        border: ${({ theme, error }) => `${borderWidth} solid ${error ? theme.error : theme.borderActive}`};
        box-shadow: 0 0 0 1px ${({ theme, error }) => (error ? theme.error : theme.borderActive)};
    }
`;


export const PlaceholderLabel = styled(Box)`
    color: ${({ theme, disabled }) => disabled ? theme.textDisabledPlaceholder : theme.textPlaceholder};
`;

export const ArrowIcon = styled(Icon)`
    ${vertCenter}
    right: ${SPACING.s};
    pointer-events: none;
`;

/*
&::placeholder {
        transition: ${defaultTransition};
        color: ${({ theme, disabled }) => disabled ? theme.textDisabledPlaceholder : theme.textPlaceholder};
    }

    &:hover {
        border: ${({ theme, disabled, error }) => {
        if (error) return `${borderWidth} solid ${theme.error}`;
        return `${borderWidth} solid ${disabled ? theme.borderDisabled : theme.borderHover}`;
    }};
    }

    &:focus {
        border: ${({ theme, error }) => `${borderWidth} solid ${error ? theme.error : theme.borderActive}`};
        box-shadow: 0 0 0 1px ${({ theme, error }) => (error ? theme.error : theme.borderActive)};
    }
*/