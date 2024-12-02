import { WeatherData, ExtendedWeatherData } from 'services/types'

// create extendedWeather array
export const createExtendedWeatherStructure = (
    extended: any,
  ): ExtendedWeatherData[] => {
    if (!extended?.list) return []
    const result = extended.list.map((item: any)=>({
        date: item.dt_txt,
        description: item.weather[0]?.description,
        icon: item.weather[0]?.icon,
        id: item.weather[0]?.id,
        temp: item.main?.temp,
    }))
    return result as ExtendedWeatherData[]
  }
  
// create currentWeather object
  export const createCurrentWeatherStructure = (current: any): WeatherData => {
    // Implement the function to return WeatherData
    return {
      city: current.name || 'Sydney',
      weather: {
        temp: current.main?.temp || 0,
        humidity: current.main.humidity,
        description: current.weather[0]?.description,
        icon: current.weather[0]?.icon,
        id: current.weather[0]?.id,
        wind: {
          deg: current.wind?.deg,
          speed: current.wind?.speed,
        },
      },
    }
  }  

// transform data
export const transformWeather = (
  payload: Array<{}>,
): { weather: WeatherData; forecast: ExtendedWeatherData[] } => {
  const [current, extended] = payload

  const currentWeather = createCurrentWeatherStructure(current)
  const extendedWeather = createExtendedWeatherStructure(extended)

  console.log({currentWeather, extendedWeather})

  return {
    weather: currentWeather,
    forecast: extendedWeather,
  }
}

