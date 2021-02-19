import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { relaInline } from 'src/styles/util';

export const StyledComponent = styled(Box)`
    ${relaInline}
    color: ${({ theme }) => theme.textLink};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;
