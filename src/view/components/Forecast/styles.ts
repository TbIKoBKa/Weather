// Core
import React, { DetailedHTMLProps } from 'react';
import styled, { css } from 'styled-components';

// Types
import { WeatherType } from '../../../bus/weather/types';

// Tools
import { getWeatherTypeIcon } from '../../../tools/helpers';
interface DayProps extends DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    selected?: boolean
    weatherType: WeatherType
}

export const ListDays = styled.ul`
    list-style: none;
    display: flex;
    margin-bottom: 40px;
`;

export const Day = styled.li<DayProps>`
    position: relative;
    width: 130px;
    height: 204px;
    background-color: #c486bb;
    color: #fff;
    padding-top: 35px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${({ selected }) => selected && css`
        background-color: #d9a9ce;
    `}
    &:hover {
        background-color: #d9a9ce;
        cursor: pointer;
    }
    &::before {
        position: absolute;
        top: 86px;
        content: "";
        display: block;
        width: 100%;
        height: 37px;
        background: url(${({ weatherType }) => getWeatherTypeIcon(weatherType)}) center no-repeat;
        background-size: contain;
    }
`;
