// Core
import React, { FC } from 'react';
import { useSelector } from '../../../tools/hooks';

// Components
import { Label } from '../../elements';

// Styles
import { StyledCurrent, MetaProp } from './styles';

export const Current: FC = () => {
    const data = useSelector(({ weather }) => weather)[ 0 ];

    if (!data) {
        return null;
    }

    return (
        <StyledCurrent>
            <Label
                afterIcon = 'big'
                fontSize = { 350 }
                fontWeight = { 200 }
                margin = {{
                    bottom: 100,
                }}>
                {data.temperature}
            </Label>
            <Label
                fontSize = { 19 }
                fontWeight = { 200 }>
                <MetaProp type = 'rainy'>%{data.rain_probability}</MetaProp>
                <MetaProp type = 'humidity'>%{data.humidity}</MetaProp>
            </Label>
        </StyledCurrent>
    );
};
