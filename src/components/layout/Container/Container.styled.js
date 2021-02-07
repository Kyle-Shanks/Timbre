import styled from 'styled-components';
import Box from 'src/components/layout/Box';

export const StyledComponent = styled(Box)`
    margin: 0 auto;
    max-width: ${({ fullWidth }) => (fullWidth ? 'none' : '60rem')};
`;
