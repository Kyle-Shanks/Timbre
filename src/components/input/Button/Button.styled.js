import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import Flex from 'src/components/layout/Flex';
import { relaInline } from 'src/styles/util';
import {
    SPACING,
    FONT_SIZE,
    FONT_WEIGHT,
    borderRadiusM,
} from 'src/styles/constants';

const getPadding = ({ size }) => {
    switch (size) {
        case 'l': return `${SPACING.m} ${SPACING.ml}`;
        case 'm': return `${SPACING.s} ${SPACING.m}`;
        case 's': return `${SPACING.xxs} ${SPACING.s}`;
        case 'icon': return SPACING.xs;
    }
};

const getFontSize = ({ size }) => {
    switch (size) {
        case 'l': return FONT_SIZE.l;
        case 's': return FONT_SIZE.s;
        default: return FONT_SIZE.m;
    }
};

const getBackgroundColor = ({ theme, variation }) => {
    return variation === 'primary' ? theme.buttonPrimaryBackground : 'transparent';
};

const getHoverBackgroundColor = ({ theme, variation }) => {
    return variation === 'primary' ? theme.buttonPrimaryHoverBackground : theme.backgroundActive;
};

const getBorderColor = ({ theme, variation }) => {
    switch (variation) {
        case 'primary': return theme.buttonPrimaryBackground;
        case 'secondary': return theme.border;
        default: return 'transparent';
    }
};

const getHoverBorderColor = ({ theme, variation }) => {
    switch (variation) {
        case 'primary': return theme.buttonPrimaryHoverBackground;
        case 'secondary': return theme.borderHover;
        default: return 'transparent';
    }
};

const getColor = ({ theme, variation }) => {
    return (variation === 'primary') ? theme.background : theme.textPrimary;
};

export const StyledComponent = styled(Box)`
    ${relaInline}
    vertical-align: middle;
    cursor: pointer;
    min-width: ${({ size }) => size === 'icon' ? '0rem' : `6rem`};
    padding: ${(props) => getPadding(props)};
    background-color: ${(props) => getBackgroundColor(props)};
    border: ${(props) => `1px solid ${getBorderColor(props)}`};
    font-size: ${(props) => getFontSize(props)};
    color: ${(props) => getColor(props)};
    font-weight: ${FONT_WEIGHT.semibold};
    border-radius: ${borderRadiusM};

    & svg {
        transition: color 0s;
        color: ${(props) => getColor(props)};
    }

    &:hover {
        background-color: ${(props) => getHoverBackgroundColor(props)};
        border: ${(props) => `1px solid ${getHoverBorderColor(props)}`};
    }

    &:active {
        pointer-events: ${({ disabled }) => disabled ? 'none' : 'all'};
    }
`;

export const Label = styled(Flex)`
    color: ${(props) => getColor(props)};
    padding: ${SPACING.xs};
`;
