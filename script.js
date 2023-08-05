
const apiKey = ''; //your personal api
const searchButton = document.getElementById('search-button');
const cityName = document.getElementById('city-name');
const weatherDescription = document.getElementById('weather-description');
const temperature = document.getElementById('temperature');

searchButton.addEventListener('click', () => {
    const cityInput = document.getElementById('city-input').value;
    getWeather(cityInput);
});

async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    
    if (data.cod === '404') {
        cityName.textContent = 'City not found';
        weatherDescription.textContent = '';
        temperature.textContent = '';
    } else {
        cityName.textContent = data.name;
        weatherDescription.textContent = data.weather[0].description;
        temperature.textContent = `${data.main.temp}°C`;
    }
}
