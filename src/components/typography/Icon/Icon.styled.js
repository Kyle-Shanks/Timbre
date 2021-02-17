import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { relaInline } from 'src/styles/util';
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
    ${relaInline}
    height: ${({ size }) => getSize(size)};
    min-height: ${({ size }) => getSize(size)};
    width: ${({ size }) => getSize(size)};
    min-width: ${({ size }) => getSize(size)};
    & > svg {
        stroke-width: ${defaultIconStrokeWidth};
        vertical-align: baseline;
    }
`;
