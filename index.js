const apiKey = '18033db1c1a2f7b502c51fe9124f09ed';

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=40.7&lon=-74&appid=18033db1c1a2f7b502c51fe9124f09ed&units=impericals";
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // crossorigin.me proxy

fetch(proxyUrl + apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data.weather[0]);
    // Handle the weather data here
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });
