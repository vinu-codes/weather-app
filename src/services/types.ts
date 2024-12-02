export type WeatherData = {
  city: string
  weather: {
    temp: number
    humidity: number
    description: string
    icon: string
    id: number
    wind: {
      deg: number
      speed: number
    }
  }
}

export type ExtendedWeatherData = {
  date: string
  description: string
  icon: string
  id: number
  temp: number
}
