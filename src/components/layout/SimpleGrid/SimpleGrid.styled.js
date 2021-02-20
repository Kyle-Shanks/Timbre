import styled from 'styled-components';
import Box from 'src/components/layout/Box';

export const StyledComponent = styled(Box)`
    display: grid;
    grid-template-rows: ${({ rows }) => `repeat(${rows}, 1fr)`};
    grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
    gap: ${({ gap }) => gap };
    justify-content: ${({ justify }) => justify };
    align-content: ${({ align }) => align };
`;
