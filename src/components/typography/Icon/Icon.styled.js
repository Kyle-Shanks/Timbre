import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import {
    defaultIconStrokeWidth,
    iconSizeXL,
    iconSizeL,
    iconSizeM,
    iconSizeS,
} from 'src/styles/constants';

const getSize = (size) => {
    switch (size) {
        case 'xl': return iconSizeXL;
        case 'l': return iconSizeL;
        case 's': return iconSizeS;
        default: return iconSizeM;
    }
};

export const StyledComponent = styled(Box)`
    height: ${({ size }) => getSize(size)};
    width: ${({ size }) => getSize(size)};
    & > svg {
        stroke-width: ${defaultIconStrokeWidth};
    }
`;
