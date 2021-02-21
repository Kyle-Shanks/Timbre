import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import Text from 'src/components/typography/Text';
import { SPACING, borderRadiusS } from 'src/styles/constants';
import { relaInline } from 'src/styles/util';

export const StyledComponent = styled(Box)`
    ${relaInline}
    padding: 0 ${SPACING.s};
    border-radius: ${borderRadiusS};
    box-shadow: 0 0 0 1px ${({ theme, variation }) => variation === 'outline' ? theme.border : 'transparent'};
    background-color: ${({ theme, variation }) => variation === 'filled' ? theme.backgroundActive : 'transparent'};
`;

export const Label = styled(Text)`
    padding: ${SPACING.xxs} ${SPACING.xs};
`;
