import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityWeather, getFiveDaysWeather, addToFavorites } from '../../store/actions';
import { motion } from 'framer-motion';
import InputSearch from '../../components/InputSearch/InputSearch';
import TempDeck from '../../components/TempDeck/TempDeck';

import './WeatherScreen.css';

const WeatherScreen = () => {
    const weatherData = useSelector(state => state.curWeather);
    const messageData = useSelector(state => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCityWeather('215854', 'Israel', 'Tel Aviv'));
        dispatch(getFiveDaysWeather('215854'));
    }, []);

    const getWeather = (key, country, city) => {
        dispatch(getCityWeather(key, country, city));
        dispatch(getFiveDaysWeather(key));
    }

    const favoriteHandler = () => {
        dispatch(addToFavorites());
    }

    let datetime;
    if (weatherData) {
        datetime = new Date(weatherData.weather[0].LocalObservationDateTime);
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
                        <h3>{datetime?.toLocaleTimeString()}</h3>
                        <i className="fas fa-clock fa-2x"></i>
                        <small>{datetime?.toDateString()}</small>
                    </div>
                    <InputSearch onWeather={getWeather}/>
                    <div>
                        <h3>{weatherData?.country}</h3>
                        <i onClick={favoriteHandler} className="fas fa-heart fa-2x"></i>
                        <small>{weatherData?.city}</small>
                        <small>{weatherData?.weather[0].WeatherText}</small>
                        <small>Now: {weatherData?.weather[0].Temperature.Imperial.Value}F</small>
                    </div>            
                </div>
                <TempDeck />
            </div>
        </motion.div>
    )
}

export default WeatherScreen;