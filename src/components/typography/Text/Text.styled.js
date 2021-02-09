import styled from 'styled-components';
import Box from 'src/components/layout/Box';
import { ellipsisStyles } from 'src/styles/util';
import { TYPOGRAPHY } from 'src/styles/constants';

export const StyledComponent = styled(Box)`
    color: ${({ theme, variation }) => variation === 'primary' ? theme.primaryText : theme.secondaryText};
    font-size: ${({ variation }) => TYPOGRAPHY[variation].fontSize};
    font-weight: ${({ variation }) => TYPOGRAPHY[variation].fontWeight};
    letter-spacing: ${({ variation }) => TYPOGRAPHY[variation].letterSpacing};
    text-align: ${({ align }) => align};
    ${({ truncate }) => truncate && ellipsisStyles}
`;
