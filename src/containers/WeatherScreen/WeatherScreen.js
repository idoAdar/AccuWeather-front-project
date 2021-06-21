import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentPosition, getCityWeather, getFiveDaysWeather, addToFavorites } from '../../store/actions';
import { motion } from 'framer-motion';
import InputSearch from '../../components/InputSearch/InputSearch';
import TempDeck from '../../components/TempDeck/TempDeck';

import './WeatherScreen.css';

const WeatherScreen = () => {
    const weatherData = useSelector(state => state.curWeather);
    const messageData = useSelector(state => state.message);
    const isRedirect = useSelector(state => state.isRedirect);
    const dispatch = useDispatch();

    // Default Location By Geolocation API:
    useEffect(() => {
        if (!isRedirect) {
            dispatch(getCurrentPosition());
            const defaultKey = '215854';
            return dispatch(getFiveDaysWeather(defaultKey));
        }
    }, []);

    const getWeather = (key, country, city) => {
        dispatch(getCityWeather(key, country, city));
        dispatch(getFiveDaysWeather(key));
    }

    const favoriteHandler = () => {
        dispatch(addToFavorites());
    }

    let message;
    if (messageData !== '') {
        message = <p className={'weather-screen-message'}>{messageData}</p>     
    }

    // Framer Motion Animation:
    const pageTransition = {
        in: {
            opacity: 1,
            x: 0
        },
        out: {
            opacity: 0,
            x: '-100vh'
        }
    };

    return (
        <motion.div exit={'out'} animate={'in'} initial={'out'} variants={pageTransition}>
            {message}
            <div className={'weather-screen-main'}>
                <div className={'flex-warrper'}>
                    <div>
                        <h3>{weatherData?.datetime.toLocaleTimeString()}</h3>
                        <i className="fas fa-clock fa-2x"></i>
                        <small>{weatherData?.datetime.toDateString()}</small>
                    </div>
                    <InputSearch onWeather={getWeather}/>
                    <div>
                        <h3>{weatherData?.country}</h3>
                        <i onClick={favoriteHandler} className="fas fa-heart fa-2x"></i>
                        <small>{weatherData?.city}</small>
                        <small>{weatherData?.text}</small>
                        <small>Now: {weatherData?.temp}F</small>
                    </div>            
                </div>
                <TempDeck />
            </div>
        </motion.div>
    )
}

export default WeatherScreen;