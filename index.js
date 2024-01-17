const apiKey = '18033db1c1a2f7b502c51fe9124f09ed';
const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${'Johannesburg'}`;
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