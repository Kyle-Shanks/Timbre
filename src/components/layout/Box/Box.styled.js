import styled from 'styled-components';
import { relaBlock } from 'src/styles/util';

export const StyledComponent = styled.div`
    ${relaBlock}
    ${({ margin }) => margin && `margin: ${margin};`}
    ${({ padding }) => padding && `padding: ${padding};`}
`;
