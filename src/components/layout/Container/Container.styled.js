import styled from 'styled-components';
import Box from 'src/components/layout/Box';

export const StyledComponent = styled(Box)`
    max-width: ${({ fullWidth }) => (fullWidth ? 'none' : '60rem')};
`;
