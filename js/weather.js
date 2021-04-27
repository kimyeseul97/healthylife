const weather = document.querySelector(".js-weather"),
  weatherIcon = document.querySelector(".js-weatherIcon"),
  temperature = document.querySelector(".js-temperature"),
  loc = document.querySelector(".js-location");

const API_KEY = "e22d0c5998d33d1993a4a74eb94e5b41";
const GEO = "geo";

function getIcon(icon) {
  weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
}

function getTemperature(temp) {
  temperature.innerText = `${Math.floor(temp)}º`;
}

function getLocation(place) {
  loc.innerText = place;
}

function getDetail(description) {
  weather.innerText = description;
}

function getGeo(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      const temp = json.main.temp;
      const place = json.name;
      const main = json.weather[0].main;
      const description = json.weather[0].description;
      const icon = json.weather[0].icon;

      paintImage(main);
      getIcon(icon);
      getTemperature(temp);
      getLocation(place);
      getDetail(description);
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(GEO, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude,
  };
  saveCoords(coordsObj);
  getGeo(latitude, longitude);
}

function handleGeoError() {
  console.log("Can't access geo location");
}

function askForGeo() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadGeo() {
  const loadedGeo = localStorage.getItem(GEO);
  if (loadedGeo === null) {
    askForGeo();
  } else {
    const parseGeo = JSON.parse(loadedGeo);
    getGeo(parseGeo.latitude, parseGeo.longitude);
  }
}

function init() {
  loadGeo();
}

init();