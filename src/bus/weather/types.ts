export type WeatherType = 'sunny' | 'cloudy' | 'rainy'

export type Day = {
    id: string
    rain_probability: number
    humidity: number
    day: number
    temperature: number
    type: WeatherType
}

export type Days = Day[]

// Set
export const SET_WEATHER = 'SET_WEATHER';
export type SetWeatherActionType = {
    type: typeof SET_WEATHER,
    payload: Days
}
export type SetWeatherContract = (payload: Days) => SetWeatherActionType

export type WeatherActionTypes =
    | SetWeatherActionType
