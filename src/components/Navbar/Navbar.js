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

    // Light-Mode:
    const lightMode = event => {
        if (event.target.checked) {
            return document.body.className = 'light-mode';
        }
        document.body.className = '';
    }

    return (
        <nav>
            <div className={'navbar-main'}>
                <div>
                    <h3><i className="fas fa-umbrella fa-lg"></i> AccuApp</h3>
                    <input type={'checkbox'} onChange={lightMode} />
                </div>
                <ul>
                    {renderRoutes}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;