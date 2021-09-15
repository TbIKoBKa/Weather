// Core
import { DetailedHTMLProps } from 'react';
import styled, { css } from 'styled-components';

interface LabelProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    fontSize?: string | number,
    afterContent?: string
}

export const Label = styled.p<LabelProps>`
    ${({ fontSize }) => fontSize && css`
        font-size: ${fontSize}px
    `}

    ${({ afterContent }) => afterContent && css`
        &::after {
            content: ${afterContent};
        }
    `}
`;
