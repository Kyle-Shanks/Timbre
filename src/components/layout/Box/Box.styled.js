import styled from 'styled-components';
import { relaBlock } from 'src/styles/util';

export const StyledComponent = styled.div`
    ${relaBlock}
    && {
        ${({ h }) => h && `height: ${h};`}
        ${({ w }) => w && `width: ${w};`}
        ${({ margin }) => margin && `margin: ${margin};`}
        ${({ padding }) => padding && `padding: ${padding};`}
    }
`;
