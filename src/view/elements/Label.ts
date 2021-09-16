// Core
import { DetailedHTMLProps } from 'react';
import styled, { css } from 'styled-components';

type AfterIconSize = 'small' | 'big'
type marginType = {
    top?: number
    right?: number
    bottom?: number
    left?: number
}
interface LabelProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
    fontSize?: number
    fontWeight?: number
    afterIcon?: AfterIconSize
    margin?: marginType
}

export const Label = styled.p<LabelProps>`
    position: relative;
    ${({ fontSize = 24, fontWeight = 400, afterIcon, margin }) => (fontSize || fontWeight || afterIcon) && css`
        font-size: ${fontSize}px;
        font-weight: ${fontWeight};
        ${afterIcon && css`
            &::after {
                content: "";
                display: inline-block;
                position: absolute;
                border-radius: 50%;
                ${ afterIcon === 'big' ? css`
                    top: 53px;
                    right: -70px;
                    width: 37px;
                    height: 41px;
                    border: 5px solid #fff;
                ` : css`
                    top: 2px;
                    right: -14px;
                    width: 5px;
                    height: 6px;
                    border: 1px solid #fff;
                `}
            }
        `}
        ${margin && css`
            ${margin.top && css`
                margin-top: ${margin.top}px;
            `}
            ${margin.right && css`
                margin-bottom: ${margin.right}px;
            `}
            ${margin.bottom && css`
                margin-bottom: ${margin.bottom}px;
            `}
            ${margin.left && css`
                margin-left: ${margin.left}px;
            `}
        `}
    `}
`;
