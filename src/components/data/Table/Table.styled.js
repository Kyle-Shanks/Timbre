import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { SPACING, FONT_WEIGHT, borderRadiusS } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
    margin: 0 auto;
    width: 88vw;
    max-width: 44rem;
    border-radius: ${borderRadiusS};
    box-shadow: 0 0 0 1px ${({ theme }) => theme.border};
`;

export const StyledOuter = styled(Box)`
    font-weight: ${FONT_WEIGHT.medium};
`;

export const StyledFoot = styled(StyledOuter)`
    box-shadow: 0 -1px 0 0 ${({ theme }) => theme.border};
`;

export const StyledBody = styled(Box)`
    & > tr {
        box-shadow: 0 -1px 0 0 ${({ theme }) => theme.border};
    }
`;

export const StyledCell = styled(Box)`
    padding: ${SPACING.m};

	& + & {
        box-shadow: -1px 0 0 0 ${({ theme }) => theme.border};
    }
`;

export const StyledHeadCell = styled(StyledCell)``;
