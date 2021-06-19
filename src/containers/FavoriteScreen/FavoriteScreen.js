import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import Card from '../../components/Card/Card';
import Pagination from '../../utills/Pagination';

import './FavoriteScreen.css';

const FavoriteScreen = () => {
    const favorites = useSelector(state => state.favorites);

    // Fronted Pagination:
    const [curPage, setCurPage] = useState(1);
    const [forecastPerPage] = useState(6);

    const indexOfLastForecast = curPage * forecastPerPage;
    const indexOfFirstForecast = indexOfLastForecast - forecastPerPage;
    const currentForecasts = favorites.slice(indexOfFirstForecast, indexOfLastForecast);

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
            <div className={'favorite-screen-main'}>
                <div className={'favorite-screen-main-title'}>
                    <h2>Favorite List</h2>
                    <small>Keep track after your favorite areas</small>
                </div>
                <div className={'favorite-grid'}>
                    {favorites.length > 0 ? (
                        currentForecasts.map(favorite => {
                            return (
                                <Card key={Math.random()} 
                                country={favorite.country}
                                city={favorite.city} 
                                temp={favorite.weather[0]?.Temperature.Imperial.Value || '24'}
                                desc={favorite.weather[0]?.WeatherText}
                                />
                            )
                        })
                    ) : (null)}
                </div>
                {favorites && <Pagination paginate={page => setCurPage(page)} totalForecasts={favorites} forecastPerPage={forecastPerPage}/>}
            </div>
        </motion.div>
    )
}

export default FavoriteScreen;