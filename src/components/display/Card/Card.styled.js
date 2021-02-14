import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { borderWidth, borderRadiusM } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
    background-color: ${({ theme }) => theme.displayBackground};
    box-shadow: 0 0 8px rgba(0,0,0,0.2);
    border: ${borderWidth} solid ${({ theme }) => theme.displayBorder};
    border-radius: ${borderRadiusM};
`;
