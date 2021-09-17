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
    ${({ fontSize = 24, fontWeight = 400, afterIcon, margin = { top: 'auto', left: 'auto', right: 'auto', bottom: 'auto' }}) => (fontSize || fontWeight || afterIcon) && css`
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
        ${(fontSize || fontWeight || afterIcon || margin) && {
        fontSize:       `${fontSize}px`,
        fontWeight,
        marginTop:      `${margin.top}px`,
        marginBottom:   `${margin.bottom}px`,
        marginRight:    `${margin.right}px`,
        marginLeft:     `${margin.left}px`,
        [ '&::after' ]: {
            content:      '',
            display:      'inline-block',
            position:     'absolute',
            borderRadius: '50%',
        },
    }}
    `}
`;
