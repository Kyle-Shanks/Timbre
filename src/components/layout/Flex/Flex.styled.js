import styled from 'styled-components';
import Container from 'src/components/layout/Container';

export const StyledComponent = styled(Container)`
    display: flex;
    flex-wrap: ${({ wrap }) => (wrap ? wrap : 'wrap') };
    flex-direction: ${({ direction }) => (direction ? direction : 'row') };
    justify-content: ${({ justify }) => (justify ? justify : 'normal') };
    align-items: ${({ align }) => (align ? align : 'normal') };
`;
