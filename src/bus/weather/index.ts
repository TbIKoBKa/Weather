// Core
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';

// API
import { fetchWeatherAsync } from './thunk';

export const useWeather = () => {
    const dispatch = useDispatch();
    const data = useSelector(({ weather }) => weather);

    useEffect(() => {
        dispatch(fetchWeatherAsync());
    }, []);

    return {
        data,
    };
};
