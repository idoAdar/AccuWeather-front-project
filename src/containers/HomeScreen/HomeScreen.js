import React from 'react';
import { motion } from 'framer-motion';

import './HomeScreen.css';

const HomeScreen = () => {
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
            <div className={'home-screen-main'}>
                <h1>Weather App</h1>
                <p>- Herolo project -</p>
                <small>This weather app was built by using AccuWeather API and React (Inc Redux for state management, Router & Hooks).</small>
                <i className="fas fa-cloud-moon-rain fa-3x"></i>
            </div>
        </motion.div>
    )
}

export default HomeScreen;