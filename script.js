function init() {
  const drakToggle = document.getElementById("dark-toggle");
  let savedtheme = localStorage.getItem("theme");
  if (savedtheme === "dark") {
    document.body.classList.add("dark");
  }
  drakToggle.addEventListener("click", toggleDarkMode);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
  let theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}
