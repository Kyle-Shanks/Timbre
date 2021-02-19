import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { relaInline } from 'src/styles/util';
import { SPACING } from 'src/styles/constants';

export const Separator = styled(Box)`
    ${relaInline}
    color: ${({ theme }) => theme.textSecondary};
    padding: 0 ${SPACING.s};
`;
