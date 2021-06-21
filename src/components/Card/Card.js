import React from 'react';
import { useDispatch } from 'react-redux';
import { getCityWeather, getFiveDaysWeather, removeFromFavorites } from '../../store/actions';
import { withRouter } from 'react-router-dom';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

import './Card.css';

const Card = props => {
    const dispatch = useDispatch();

    const removeHandler = event => {
        event.stopPropagation();
        dispatch(removeFromFavorites(props.city))
    };

    const redirect = () => {
        dispatch({ type: 'REDIRECT' });
        dispatch(getCityWeather(props.searchKey, props.country, props.city));
        dispatch(getFiveDaysWeather(props.searchKey));
        props.history.push('/weather')
    }; 

    return (
        <div onClick={redirect} className={'card-main'}>
            <div className={'card-icon'}><WeatherIcon temp={props.temp}/></div>
            <div className={'card-details'}>
                <p>{props.country}</p>
                <p>- {props.desc} -</p>
                <small>{`There is ${props.temp}F in ${props.city}`}</small>
                <i onClick={removeHandler} className="fas fa-minus-square fa-lg"></i>
            </div>
        </div>
    )
}

export default withRouter(Card);