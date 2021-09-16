// Core
import React, { FC } from 'react';
import { useSelector } from '../../../tools/hooks';

// Components
import { Label } from '../../elements';

// Styles
import { StyledCurrent } from './styles';

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
                fontWeight = { 200 }>
                {data.temperature}
            </Label>
        </StyledCurrent>
    );
};
