import axios from 'axios'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY: number = process.env.REACT_APP_API_KEY

// API call to get weather by city
export const getWeatherByCity = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    })
    console.log({ response: response.data })
    return response.data
  } catch (error: unknown) {
    console.log(error, 'error from getWeatherByCity')
  }
}

export const getExtendedWeatherByCity = async (city: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
        cnt: 6,
      },
    })
    console.log({ response: response.data })
    return response.data
  } catch (error: unknown) {
    console.log(error, 'error from getExtendedWeather')
  }
}
