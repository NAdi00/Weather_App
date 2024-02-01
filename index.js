const apiKey = '18033db1c1a2f7b502c51fe9124f09ed';

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?lat=-26.201450&lon=28.045490&appid=18033db1c1a2f7b502c51fe9124f09ed&units=impericals";
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // crossorigin.me proxy

fetch(proxyUrl + apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    document.getElementById('temp').innerHTML = (Number(data.current.temp)-273) + "<sup>o</sup>C";
    document.getElementById('humi').innerHTML = "Humidity: " + data.current.humidity;
    document.getElementById('preci').innerHTML = "SKY:" + data.current.weather[0].main;
    document,getElementById('temp_t').innerHTML = (Number(data.daily.temp.night)-273) + "<sup>o</sup>C";
    // Handle the weather data here
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });

const date = new Date();
let month = date.getMonth() + 1;
let hours = date.getHours();
let minutes = date.getMinutes();
let day = date.getDate();

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
month = months[month-1]; 

var dating = document.getElementById('date');

dating.innerHTML = `<span style='font-size:160%'>${hours}:${minutes}</span><br><span>${day} - ${month}</span>`