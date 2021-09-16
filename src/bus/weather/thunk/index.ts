// Core
import { Dispatch } from 'redux';

// Actions
import { setWeatherAction } from '../actions';

// API
import { fetchWeather } from './api';

export const fetchWeatherAsync = () => async (dispatch: Dispatch) => {
    const data = await fetchWeather();

    dispatch(setWeatherAction(data));
};
