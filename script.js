`use strict`
const apiKey = "33a3cf90d59cf8f4d4dd715ed80cefb3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherIcon = document.querySelector(".weather-icon")
const searchBox = document.querySelector(".Search input");
const searchBtn = document.querySelector(".Search button");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
    console.log(data.weather[0].main);
    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png"
    }

    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Humidity") {
        weatherIcon.src = "images/humidity.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "images/snow.png"
    }

    else if (data.weather[0].main == "Wind") {
        weatherIcon.src = "images/wind.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png"
    }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
