import React from 'react';
import './Pagination.css';

const Pagination = props => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalForecasts.length / props.forecastPerPage); i++) {
        pageNumbers.push(i);
    }

    const changePage = (page) => {
        props.paginate(page)
    }

    return (
        <nav>
            <ul className={'pagination'}>
                {pageNumbers.map(page => {
                    return (
                        <li key={page} onClick={() => changePage(page)}>
                            <i className="fas fa-circle"></i>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Pagination;