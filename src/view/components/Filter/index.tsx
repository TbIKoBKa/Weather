// Core
import React, { FC, ChangeEvent, useState } from 'react';

// Styles
import { Filter as StyledFilter, CheckBox, StyledLabel, Input, Button } from './styles';

// Types
import { filterContract } from '../../pages/Main/types';
import { WeatherType } from '../../../bus/weather/types';

type PropTypes = {
    onFilter: filterContract
}

export const Filter: FC<PropTypes> = ({ onFilter }) => {
    const [ selectedCheckBox, setSelectedCheckBox ] = useState<WeatherType | null>(null);
    const [ minTemp, setMinTemp ] = useState<string>('');
    const [ maxTemp, setMaxTemp ] = useState<string>('');
    const [ filtered, setFiltered ] = useState<boolean>(false);

    const onCheckBoxClickHandle = (type: WeatherType) => {
        if (!filtered) {
            setSelectedCheckBox(type);
        }
    };

    const onButtonClickHandle = () => {
        if (filtered) {
            setSelectedCheckBox(null);
            setMinTemp('');
            setMaxTemp('');
            onFilter({ weatherType: null, minTemp: '', maxTemp: '' });
        } else {
            onFilter({ weatherType: selectedCheckBox, minTemp, maxTemp });
        }
        setFiltered((prevState) => !prevState);
    };

    const onMinTempChangeHandle = (event: ChangeEvent<HTMLInputElement>) => setMinTemp(event.target.value);

    const onMaxTempChangeHandle = (event: ChangeEvent<HTMLInputElement>) => setMaxTemp(event.target.value);

    return (
        <StyledFilter>
            <CheckBox
                disabled = { filtered }
                selected = { selectedCheckBox === 'cloudy' }
                onClick = { () => onCheckBoxClickHandle('cloudy') }>Облачно
            </CheckBox>
            <CheckBox
                disabled = { filtered }
                selected = { selectedCheckBox === 'sunny' }
                onClick = { () => onCheckBoxClickHandle('sunny') }>Солнечно
            </CheckBox>
            <StyledLabel>
                Минимальная температура
                <Input
                    disabled = { filtered }
                    type = 'number'
                    value = { minTemp }
                    onChange = { onMinTempChangeHandle }
                />
            </StyledLabel>
            <StyledLabel>
                Максимальная температура
                <Input
                    disabled = { filtered }
                    type = 'number'
                    value = { maxTemp }
                    onChange = { onMaxTempChangeHandle }
                />
            </StyledLabel>
            <Button
                children = { filtered ? 'Сбросить' : 'Отфильтровать' }
                disabled = { selectedCheckBox === null && minTemp === '' && maxTemp === '' }
                onClick = { onButtonClickHandle }
            />
        </StyledFilter>
    );
};
