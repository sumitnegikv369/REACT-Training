import React from 'react'

const Weather = (props) => {
    const {temperature} = props;
    const sunny = "https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-01-512.png";
    const cold = "https://cdn3.iconfinder.com/data/icons/tiny-weather-1/512/snow-512.png";

    if(temperature>25) return <div><img src={sunny} alt="sun" /> <p>It's sunny today!</p></div>
    else if(temperature<10) return <div><img src={cold} alt="cold" /><p>It's cold today!</p></div>
    return null;
}

export default Weather
