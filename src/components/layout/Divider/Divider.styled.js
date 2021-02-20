import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { relaBlock } from 'src/styles/util';
import { SPACING, borderWidth } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
    ${relaBlock}
    border: 0;
    border-top: ${borderWidth} solid ${({ theme }) => theme.border};
    margin: ${SPACING.m} 0;
`;
