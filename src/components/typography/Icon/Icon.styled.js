import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { defaultIconSize, defaultIconStrokeWidth } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
    // color: ${({ theme }) => theme.icon};
    height: ${defaultIconSize};
    width: ${defaultIconSize};
    & > svg {
        stroke-width: ${defaultIconStrokeWidth};
    }
`;
