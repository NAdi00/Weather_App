const apiKey = '18033db1c1a2f7b502c51fe9124f09ed';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?lat={26.2}&lon={28.04}&appid={863242cfb2b1d357e6093d9a4df19a4b}'
const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // crossorigin.me proxy

fetch(proxyUrl + apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    // Handle the weather data here
  })
  .catch(error => {
    console.error('Error fetching weather data:', error);
  });