import React from 'react';
import { useSelector } from 'react-redux';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

import './TempDeck.css';

const TempDeck = () => {
    const weekForecasts = useSelector(state => state.weekForecasts);

    return (
        <div className={'tempdeck-main'}>
            {weekForecasts.DailyForecasts?.length > 0 ? weekForecasts.DailyForecasts.map(forcast => {
                const date = new Date(forcast.Date);
                return (
                    <div key={Math.random()} className={'tempdeck-main-card'}>
                        <p>{date.toLocaleDateString()}</p>
                        <WeatherIcon temp={forcast.Temperature.Minimum.Value}/>
                        <p>{`Min ${forcast.Temperature.Minimum.Value}F - Max ${forcast.Temperature.Maximum.Value}F`}</p>
                    </div>
                )
            }): null}
        </div>
    )
}

export default TempDeck;