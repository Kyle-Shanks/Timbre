import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { borderRadiusM, FONT_WEIGHT } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
    cursor: pointer;
    min-width: 3rem;
    padding: 0.75rem 1rem;
    font-weight: ${FONT_WEIGHT.semibold};
    border-radius: ${borderRadiusM};
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.background};
`;
