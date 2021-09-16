// Core
import { Reducer } from 'redux';

// Types
import * as types from './types';

const initialState: types.Days = [];

export const weatherReducer: Reducer<types.Days, types.WeatherActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_WEATHER:
            return action.payload;
        default:
            return state;
    }
};
