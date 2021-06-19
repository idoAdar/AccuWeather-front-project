import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = () => {
    const routes = [
        {
            id: 1,
            nav: 'home',
            path: '/'
        },
        {
            id: 2,
            nav: 'weather',
            path: '/weather'
        },
        {
            id: 3,
            nav: 'favorite',
            path: '/favorite'
        }
    ];
    const renderRoutes = routes.map(route => {
        return (
            <li key={route.id}>
                <NavLink to={`${route.path}`} exact activeClassName={'active'}>
                    {route.nav === 'home' && <i className="fas fa-home"></i>}
                    {route.nav}
                </NavLink>
            </li>
        )
    })

    return (
        <Fragment>
            <div className={'navbar-main'}>
                <div>
                    <h3><i className="fas fa-umbrella fa-lg"></i> AccuApp</h3>
                </div>
                <ul>
                    {renderRoutes}
                </ul>
            </div>
        </Fragment>
    )
}

export default Navbar;