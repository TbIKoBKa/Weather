// Core
import React, { FC } from 'react';

// Elements
import { Label } from '../../elements';

// Styles
import { StyledHeader, Logo, CurrentDate, CurrentDayOfWeek } from './styles';

// Types
import { Day } from '../../../bus/weather/types';

// Tools
import { getDayOfWeek, getMonthOfYear } from '../../../tools/helpers';

type Proptypes = {
    day: Day
}

import icon from '../../../assets/images/weather-icon-cloudy.png';

export const Header: FC<Proptypes> = ({ day }) => {
    if (!day) {
        return null;
    }

    return (
        <StyledHeader>
            <Logo
                alt = 'weather logo'
                src = { icon }
            />
            <CurrentDate>
                <CurrentDayOfWeek
                    fontSize = { 28 }
                    fontWeight = { 400 }
                    margin = {{
                        top:    15,
                        bottom: 10,
                    }}>
                    {getDayOfWeek(day.day)}
                </CurrentDayOfWeek>
                <Label
                    fontSize = { 14 }
                    fontWeight = { 200 }>
                    {`${new Date(day.day).getDate()} ${getMonthOfYear(day.day)}`}
                </Label>
            </CurrentDate>
        </StyledHeader>
    );
};
