// Core
import React, { FC } from 'react';

// Styles
import { StyledHeader, Logo, CurrentDate, CurrentDayOfWeek, CurrentDayMonth } from './styles';

// Types
import { Day } from '../../../bus/weather/types';

// Tools
import { getDayOfWeek, getMonthOfYear, getWeatherTypeIcon } from '../../../tools/helpers';

type Proptypes = {
    day: Day
}

export const Header: FC<Proptypes> = ({ day }) => {
    if (!day) {
        return null;
    }

    let icon = getWeatherTypeIcon(day.type);


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
                <CurrentDayMonth
                    fontSize = { 14 }
                    fontWeight = { 200 }>
                    {`${new Date(day.day).getDate()} ${getMonthOfYear(day.day)}`}
                </CurrentDayMonth>
            </CurrentDate>
        </StyledHeader>
    );
};
