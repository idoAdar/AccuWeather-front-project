import axios from 'axios';
import { SEARCH_RESULTS,
GET_WEATHER,
GET_WEEK_WEATHER,
ADD_TO_FAVORITES,
REMOVE_FROM_FAVORITES,
SET_MESSAGE
 } from './actionTypes';
const API = 'HeIBFKnJmUovajKW8vDI6Ja7F1c80SiR';

export const getCurrentPosition = () => async dispatch => {
    const successCb = async position => {
        const response = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${API}&q=${position.coords.latitude}%2C${position.coords.longitude}&toplevel=true`);
        
        const data = {
            id: Math.random(),
            country: response.data.Country.LocalizedName,
            city: response.data.TimeZone.Name,
            text: response.data.Region.LocalizedName,
            temp: 72.4,
            datetime: new Date(),
            key: '213225'
        };

        dispatch({
            type: GET_WEATHER,
            payload: data
        })        
    }
    
    const errorCb = error => {
        console.log(error);
    }
    
    navigator.geolocation.getCurrentPosition(successCb, errorCb);
}

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
        const results = response.data[0];
        const data = {
            id: Math.random(),
            country,
            city,
            text: results.WeatherText,
            temp: results.Temperature.Imperial.Value,
            datetime: new Date(results.LocalObservationDateTime),
            key: key
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
            payload: `${isExist.city} already in your favorites`
        })
    }
    dispatch({
        type: ADD_TO_FAVORITES,
        payload: current
    })
}

export const removeFromFavorites = city => dispatch => {
    dispatch({
        type: REMOVE_FROM_FAVORITES,
        payload: city
    })
}