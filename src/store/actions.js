import axios from 'axios';
import { SEARCH_RESULTS,
GET_WEATHER,
GET_WEEK_WEATHER,
ADD_TO_FAVORITES,
REMOVE_FROM_FAVORITES,
SET_MESSAGE
 } from './actionTypes';
const API = 'QidwYLl44OsOGVhVplccGGlYfXHvtp8L';

export const getCityCode = state => async dispatch => {
    try {
        const response = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API}&q=${state}`);
        const results = [];
        for (let i = 0; i < 5; i++) {
            if (response.data[i]) {
                results.push(response.data[i]);
            }
        }
        dispatch({
            type: SEARCH_RESULTS,
            payload: results
        });
    } catch (error) {
        dispatch({
            type: SET_MESSAGE,
            payload: error.message
        })
    }
}

export const getCityWeather = (key, country, city) => async dispatch => {
    try {
        const response = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API}`);
        const data = {
            weather: response.data,
            country,
            city
        };
        dispatch({
            type: GET_WEATHER,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: SET_MESSAGE,
            payload: error.message
        })
    }
}

export const getFiveDaysWeather = key => async dispatch => {
    try {
        const response = await axios.get(`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API}`)
        dispatch({
            type: GET_WEEK_WEATHER,
            payload: response.data
        })
    } catch (error) {
        dispatch({
            type: SET_MESSAGE,
            payload: error.message
        })
    }
}

export const addToFavorites = () => (dispatch, getState) => {
    const current = getState().curWeather;
    const favorites = getState().favorites;

    const isExist = favorites.find(element => element.city === current.city);
    if (isExist) {
        return dispatch({
            type: SET_MESSAGE,
            payload: 'City already in your favorite list'
        })
    }
    dispatch({
        type: ADD_TO_FAVORITES,
        payload: current,
        message: 'City added to your favorite list'
    })
}

export const removeFromFavorites = city => dispatch => {
    dispatch({
        type: REMOVE_FROM_FAVORITES,
        payload: city
    })
}