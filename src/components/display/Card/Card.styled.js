import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { SPACING, borderWidth, borderRadiusM } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
    background-color: ${({ theme }) => theme.displayBackground};
    border: ${borderWidth} solid ${({ theme }) => theme.displayBorder};
    border-radius: ${borderRadiusM};
    padding: ${SPACING.l};
`;
