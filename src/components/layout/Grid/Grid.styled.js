import styled from 'styled-components';
import Container from 'src/components/layout/Container';

export const StyledComponent = styled(Container)`
    display: grid;
    ${({ template, rows, columns, areas }) => {
        console.log(template);
        if (template) return `grid-template: ${template};`
        return (rows ? `grid-template-rows: ${rows};` : '')
            + (columns ? `grid-template-columns: ${columns};` : '')
            + (areas ? `grid-template-areas: ${areas};` : '');
    }}
    gap: ${({ gap }) => (gap ? gap : '0') };
    justify-content: ${({ justify }) => (justify ? justify : 'normal') };
    align-content: ${({ align }) => (align ? align : 'normal') };
`;
