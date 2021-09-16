// Types
import * as types from './types';

export const setWeatherAction: types.SetWeatherContract = (payload) => ({
    type: types.SET_WEATHER,
    payload,
});
