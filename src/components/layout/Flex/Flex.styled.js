import styled from 'styled-components';
import Container from 'src/components/layout/Container';

export const StyledComponent = styled(Container)`
    display: flex;
    flex-wrap: ${({ wrap }) => wrap };
    flex-direction: ${({ direction }) => direction };
    justify-content: ${({ justify }) => justify };
    align-items: ${({ align }) => align };
`;
