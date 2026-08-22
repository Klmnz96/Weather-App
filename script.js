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
    console.log(result);
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
    return data;
  } catch (error) {
    console.error("Fehler beim Laden:", error);
  }
}
