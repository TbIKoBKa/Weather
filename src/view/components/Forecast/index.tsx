// Core
import React, { FC } from 'react';
import { getDayOfWeek } from '../../../tools/helpers';
import { useSelector } from '../../../tools/hooks';

// Elements
import { Label } from '../../elements';

// Styles
import { ListDays, Day } from './styles';

export const Forecast: FC = () => {
    const data = useSelector(({ weather }) => weather);

    const filteredData = data.slice(0, 7);

    return (
        <ListDays>
            {
                filteredData.map((item) => (
                    <Day
                        key = { item.id }
                        weatherType = 'cloudy'>
                        <Label
                            fontSize = { 18 }
                            fontWeight = { 400 }>
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
