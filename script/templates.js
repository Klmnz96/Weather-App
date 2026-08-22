function renderWeatherTemplate(weatherResult) {
  return `<div class="weather-app__city">
    <h2 class="city-name" id="city-name">${weatherResult.cityName}</h2>
    </div>
    <div class="weather-app__temperature" id="weather-app__temperature">
    <p class="temperature" id="temperature"> ${weatherResult.weatherData.current.temperature_2m}°C</p>
    </div>
    <div class="weather-app__icon" id="weather-app__icon">
    <img src="${getWeatherIcon(weatherResult.weatherData.current.weather_code)}" alt="Wettersymbol" />
    </div>
    <ul class="weather-app__details" id="weather-app__details">
    <li class="weather-app__feels-like">Feels like: ${weatherResult.weatherData.current.apparent_temperature}°C</li>
    <li class="weather-app__humidity">Humidity: ${weatherResult.weatherData.current.relative_humidity_2m}%</li>
    <li class="weather-app__wind-speed">Wind Speed: ${weatherResult.weatherData.current.wind_speed_10m} km/h</li>
    </ul>
    </div>`;
}

function getWeatherIcon(weatherCode) {
  switch (weatherCode) {
    case 0:
      return "./assets/icons/sunny.svg";
    case 1:
    case 2:
      return "./assets/icons/partly-cloudy.svg";
    case 3:
      return "./assets/icons/cloudy.svg";
    case 45:
    case 48:
      return "./assets/icons/fog.svg";
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
      return "./assets/icons/drizzle.svg";
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return "./assets/icons/rain.svg";
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return "./assets/icons/snow.svg";
    case 95:
    case 96:
    case 99:
      return "./assets/icons/thunderstorm.svg";
    default:
      return "./assets/icons/sunny.svg";
  }
}
