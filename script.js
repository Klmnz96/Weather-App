function init() {
  const drakToggle = document.getElementById("dark-toggle");
  let savedtheme = localStorage.getItem("theme");
  if (savedtheme === "dark") {
    document.body.classList.add("dark");
  }
  drakToggle.addEventListener("click", toggleDarkMode);

  const searchForm = document.querySelector(".weather-app__search-button");
  searchForm.addEventListener("click", async function handleSearch(event) {
    let searchInputRef = document.getElementById("search-input");
    let searchInput = searchInputRef.value;
    const result = await getWeatherData(searchInput);
    const resultElement = document.getElementById("weather-app__result");
    resultElement.innerHTML = renderWeatherTemplate(result);
  });
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  let theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

async function getWeatherData(city) {
  try {
    const fetchResponse = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`,
    );
    const data = await fetchResponse.json();
    const { latitude, longitude } = data.results[0];
    const weatherResponse = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code`,
    );
    const weatherData = await weatherResponse.json();
    return { cityName: data.results[0].name, weatherData };
  } catch (error) {
    console.error("Fehler beim Laden:", error);
  }
}
