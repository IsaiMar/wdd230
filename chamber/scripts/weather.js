const currentTemp = document.querySelector("#current-temp")
const weatherIcon = document.querySelector("#weather-icon")
const captionDesc = document.querySelector("figcaption")
const apiKey = "2720b30d6ec40b06e7546f1b4a444a51";
const latitude = 22.23208;
const longitude = -97.86125;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconCode = data.weather[0].icon;
  const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}
