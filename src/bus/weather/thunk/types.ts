// Fetch
export const FETCH_WEATHER_ASYNC = 'FETCH_WEATHER_ASYNC';
export type FetchWeatherActionType = {
    type: typeof FETCH_WEATHER_ASYNC,
}
export type FetchWeatherAsyncContract = () => FetchWeatherActionType
