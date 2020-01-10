import React, {useEffect, useState} from "react";
import { render } from "react-dom";
import {usePosition} from './utils/getLocation';
import {Icons} from "./components/Icons";
import {getIcon} from "./utils/getIcons"

const App = () => {
const [weather, setWeather] = useState({
  name: '',
  country: '',
  temp: '',
  description: '',
});

const {name, country, temp, description} = weather;
const currentTempInCelsius = Math.round(temp * 10) / 10;
const currentIcon = getIcon(description)

const {latitude, longitude} = usePosition();
const lat = latitude;
const lon = longitude;

useEffect(()=>{
  const getWeather = async (lat, lon) => {
    const url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather({
      name: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      description: data.weather[0].main,
      })
    }
      getWeather(lat, lon);
}, [lat, lon])

  return (
<div>
  {weather ? (
  <div>
    <h2>{name}, {country}</h2><br/>
    <h2>{currentTempInCelsius} {String.fromCharCode(176)}</h2><br/>
    <h2>{description}</h2><br/>
    <Icons currentIcon={currentIcon} />
  </div>
  ) : (<h2>Loading</h2>)}
</div>

  );
};

render(<App />, document.getElementById("root"));
