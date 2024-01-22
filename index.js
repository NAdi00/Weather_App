
"API Key from weatherbit : 6c82c05406804ea1bfde9ef382fb63e0"

import axios from "axios";

// Weatherbit API key - Sign up on Weatherbit (https://www.weatherbit.io/) to get your API key
const apiKey = ' 6c82c05406804ea1bfde9ef382fb63e0';

// Example: Get current weather data by city name
const city = 'New York';
const weatherbitApiUrl = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

// Make a GET request to the Weatherbit API
axios.get(weatherbitApiUrl)
  .then(response => {
    // Handle the API response
    const weatherData = response.data.data[0]; // Assuming you want the first result

    // Extract relevant information from the response
    const temperature = weatherData.temp;
    const description = weatherData.weather.description;

    // Log the weather information
    console.log(`Current weather in ${city}: ${temperature}°C, ${description}`);
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching weather data:', error.message);
  });