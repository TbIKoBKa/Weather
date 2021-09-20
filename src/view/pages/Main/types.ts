// Types
import { Days, WeatherType } from '../../../bus/weather/types';

export type FilterFieldsTypes = {
    weatherType: WeatherType | null
    minTemp: string
    maxTemp: string
}

export type filterContract = (fields: FilterFieldsTypes) => Days
