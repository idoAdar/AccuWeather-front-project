import React from 'react';

import './WeatherIcon.css';

const WeatherIcon = props => {
    const temp = props.temp;
    const cloudShowersHeavy = <i className="fas fa-cloud-showers-heavy fa-3x"></i>
    const cloudSunRain = <i className={'fas fa-cloud-sun-rain fa-3x'}></i>
    const cloudSun = <i className="fas fa-cloud-sun fa-3x"></i>
    const sun = <i className="fas fa-sun fa-3x"></i>

    let icon;
    if (temp < 50) {
        icon = cloudShowersHeavy;
    } else if (temp < 61) {
        icon = cloudSunRain;
    } else if (temp < 75) {
        icon = cloudSun;
    } else {
        icon = sun;
    }

    return (
        <div className={'weather-icon-main'}>
            {icon}
        </div>
    )
}
export default WeatherIcon;