// select HTML elements in the document
const currentTemp = document.querySelector("#current-temp")
const weatherIcon = document.querySelector("#weather-icon")
const captionDesc = document.querySelector("figcaption")
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat={49.75}&lon={6.64}&units=imperial&appid={af65b8c46bf6d516572e28a0bef52d1c}"

async function apiFetch() {
  try {
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      // console.log(data) // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text())
    }
  } catch (error) {
    console.log(error)
  }
}

apiFetch()

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`
  const iconsrc = `https://openweathermap.org/img/w/${iconCode}.png`
  let desc = data.weather[0].description
  weatherIcon.setAttribute("src", iconsrc)
  weatherIcon.setAttribute("alt", desc)
  captionDesc.textContent = `${desc}`
}
