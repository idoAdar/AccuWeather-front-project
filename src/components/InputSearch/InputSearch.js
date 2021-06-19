import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCityCode } from '../../store/actions';

import './InputSearch.css';

const InputSearch = props => {
    const [searchState, setSearchState] = useState('');
    const results = useSelector(state => state.inputResults);
    const dispatch = useDispatch();

    const updateState = event => setSearchState(event.target.value);

    const getResults = event => {
        event.preventDefault();
        dispatch(getCityCode(searchState));
        setSearchState('');
    }

    return (
        <div className={'input-search-main'}>
            <form className={'input-search-form'} onSubmit={getResults}>
                <input type={'text'} 
                    onChange={updateState} 
                    value={searchState} 
                    placeholder={'City...'}
                />
                <button type={'submit'}>Search</button>
            </form>
            <ul>
                {results.length > 0 && results.map(result => {
                    return (
                        <li key={result.Key} 
                            onClick={() => props.onWeather(result.Key, result.Country.LocalizedName, result.LocalizedName)}>
                            <p>{result.LocalizedName}</p>
                            <small>{result.Country.LocalizedName}</small>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default InputSearch;