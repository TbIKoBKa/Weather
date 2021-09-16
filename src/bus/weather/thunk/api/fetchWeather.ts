// Types
import { FetchWeather } from './types';

// Constants
import { API } from '../../../../init/constants';

export const fetchWeather: FetchWeather = async () => {
    try {
        const response = await fetch(API, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.status !== 200) {
            throw Error('Weather fetch failed');
        }

        const data = await response.json();

        return data.data;
    } catch (error) {
        console.log(error);
    }
};
