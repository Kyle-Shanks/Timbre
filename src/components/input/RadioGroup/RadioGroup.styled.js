import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { SPACING } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
    & > * + * {
        margin-left: ${SPACING.m};
    }
`;
