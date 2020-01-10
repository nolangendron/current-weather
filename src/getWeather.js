const getWeather = async (lat, lon) => {
  const url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default getWeather;