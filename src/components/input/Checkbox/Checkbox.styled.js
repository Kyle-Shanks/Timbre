import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { SPACING, defaultCheckboxSize } from 'src/styles/constants';

const getSvgFill = ({ theme, selected, disabled }) => {
    if (!selected) return theme.background;
    return disabled ? theme.textDisabled : theme.textPrimary;
};

export const StyledComponent = styled(Box)`
    display: inline-block;
    color: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
    user-select: ${({ disabled }) => disabled ? 'none' : 'auto'};
    cursor: ${({ disabled }) => disabled ? 'not-allowed' : 'pointer'};
    text-decoration: ${({ disabled }) => disabled ? 'line-through' : 'none'};
`;

export const CheckboxSvg = styled(Box)`
    height: ${defaultCheckboxSize};
    width: ${defaultCheckboxSize};
    margin-right: ${SPACING.xs};
    fill: none;
    stroke: ${({ theme }) => theme.background};
    stroke-width: 5;
    stroke-linecap: round;
    transition: 0s;

    & > rect {
        stroke-width: 2.5;
        fill: ${(props) => getSvgFill(props)};
        stroke: ${({ theme, disabled }) => disabled ? theme.textDisabled : theme.textPrimary};
    }
`;
