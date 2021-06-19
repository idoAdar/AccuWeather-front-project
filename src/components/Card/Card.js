import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromFavorites } from '../../store/actions';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

import './Card.css';

const Card = props => {
    const dispatch = useDispatch();
    const removeHandler = () => dispatch(removeFromFavorites(props.city));

    return (
        <div className={'card-main'}>
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

export default Card;