const getWeather = address => {
  fetch("/weather/?location=" + address, {
    "Content-Type": "application/json",
    // prettier-ignore
    "Accept": "application/json"
  })
    .then(res => res.json())
    .then(data => {
      const location = document.getElementById(`location-data`);
      const forecast = document.getElementById(`forecast-data`);
      const error = document.getElementById(`error-message`);
      if (data.error) {
        location.textContent = ``;
        forecast.textContent = ``;
        error.textContent = data.error;
      } else {
        location.textContent = data.location;
        forecast.textContent = data.forecast;
        error.textContent = ``;
      }
    });
};

const weatherForm = document.getElementById(`weather-form`);
weatherForm.addEventListener(`submit`, e => {
  e.preventDefault();
  const error = document.getElementById(`error-message`);
  error.textContent = `Loading...`;
  getWeather(e.target[0].value);
});
