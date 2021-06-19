import { SEARCH_RESULTS,
GET_WEATHER,
GET_WEEK_WEATHER,
ADD_TO_FAVORITES,
REMOVE_FROM_FAVORITES,
SET_MESSAGE
 } from './actionTypes';

const initState = {
    curWeather: null,
    inputResults: [],
    weekForecasts: [],
    favorites: [],
    message: ''
};

const reducer = (state = initState, action) => {
    switch (action.type) {
        case SEARCH_RESULTS:
            return {
                ...state,
                inputResults: action.payload,
                message: ''
            }
        case GET_WEATHER:
            return {
                ...state,
                curWeather: action.payload,
                inputResults: [],
                message: ''
            }
        case GET_WEEK_WEATHER:
            return {
                ...state,
                weekForecasts: action.payload,
                message: ''
            }
        case ADD_TO_FAVORITES:
            return {
                ...state,
                favorites: [ action.payload, ...state.favorites ],
                message: action.message
            }
        case REMOVE_FROM_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(favorite => favorite.city !== action.payload)
            }
        case SET_MESSAGE:
            return {
                ...state,
                message: action.payload
            }
        default: return state;
    }
};

export default reducer;