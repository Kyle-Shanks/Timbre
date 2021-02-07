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
    gap: ${({ gap }) => gap };
    justify-content: ${({ justify }) => justify };
    align-content: ${({ align }) => align };
`;
