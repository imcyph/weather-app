const apiKey = "";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBotn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function getWeather(city) {
    const response = await fetch(apiURL + city + `&appid=` + apiKey);

    if(response.status == 404){
        document.querySelector(".error").style.desplay = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        var data = await response.json();
        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "icons/overcast.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "icons/sun.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "icons/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "icons/rain.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "icons/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "icons/snow.png";
        }
        else if(data.weather[0].main == "Thunderstorm"){
            weatherIcon.src = "icons/thunderstorm.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }




}

searchBotn.addEventListener("click", () => {
    getWeather(searchBox.value);
});