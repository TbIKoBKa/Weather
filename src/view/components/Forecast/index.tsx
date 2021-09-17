// Core
import React, { FC, useState } from 'react';
import { getDayOfWeek } from '../../../tools/helpers';
import { useSelector } from '../../../tools/hooks';

// Elements
import { Label } from '../../elements';

// Styles
import { ListDays, Day } from './styles';

export const Forecast: FC = () => {
    const data = useSelector(({ weather }) => weather);
    const filteredData = data.slice(0, 7);
    const [ selected, setSelected ] = useState('0');

    const onClickHandle = (value: string) => {
        console.log(value);
        setSelected(value);
    };

    return (
        <ListDays>
            {
                filteredData.map((item) => (
                    <Day
                        key = { item.id }
                        selected = { item.id === selected }
                        weatherType = { item.type }
                        onClick = { () => onClickHandle(item.id) }>
                        <Label
                            fontSize = { 18 }
                            fontWeight = { 400 }
                            margin = {{
                                bottom: 90,
                            }}>
                            {getDayOfWeek(item.day)}
                        </Label>
                        <Label
                            afterIcon = 'small'
                            fontSize = { 30 }
                            fontWeight = { 200 }>
                            {item.temperature}
                        </Label>
                    </Day>
                ))
            }
        </ListDays>
    );
};
