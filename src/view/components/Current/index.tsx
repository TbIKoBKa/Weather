// Core
import React, { FC } from 'react';

// Components
import { Label } from '../../elements';

export const Current: FC = () => {
    return (
        <Label
            afterContent = '°'
            fontSize = { 40 }>41
        </Label>
    );
};
