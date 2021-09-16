// Core
import React, { DetailedHTMLProps } from 'react';
import styled from 'styled-components';

type WeatherType = 'sunny' | 'cloudy' | 'rainy'

interface DayProps extends DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
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
    padding: 35px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    &:hover {
        background-color: #d9a9ce;
        cursor: pointer;
    }
    &::before {
        position: absolute;
        top: 86px;
        content: "";
        display: block;
        height: 37px;
        background-size: contain;
        background-repeat: no-repeat;
        width: 62px;
    }
`;
