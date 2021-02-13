import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { SPACING, borderWidth, borderRadiusS, defaultTransition } from 'src/styles/constants';

const getBorder = ({ theme, disabled, error }) => {
    if (error) return `${borderWidth} solid ${theme.error}`;
    return `${borderWidth} solid ${disabled ? theme.borderDisabled : theme.border}`;
};

const getBorderHover = ({ theme, disabled, error }) => {
    if (error) return `${borderWidth} solid ${theme.error}`;
    return `${borderWidth} solid ${disabled ? theme.borderDisabled : theme.borderHover}`;
};

export const StyledComponent = styled(Box)`
    min-width: 20rem;
    padding: ${SPACING.s} ${SPACING.m};
    color: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
    background-color: ${({ theme }) => theme.background};
    border: ${(props) => getBorder(props)};
    border-radius: ${borderRadiusS};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'auto'};

    &::placeholder {
        transition: ${defaultTransition};
        color: ${({ theme, disabled }) => disabled ? theme.textDisabledPlaceholder : theme.textPlaceholder};
    }

    &:hover {
        border: ${(props) => getBorderHover(props)};
    }

    &:focus {
        border: ${borderWidth} solid ${({ theme, error }) => error ? theme.error : theme.borderActive};
        box-shadow: 0 0 0 1px ${({ theme, error }) => (error ? theme.error : theme.borderActive)};
    }
`;
