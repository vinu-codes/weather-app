import { WeatherData, ExtendedWeatherData } from 'services/types'

type WeatherItem = {
  date: string
  [key: string]: any
}

// remove from array the first item
const removeFirstItem = (filteredArray: any) => {
  const result = filteredArray.filter((_: any, index: number) => {
    return index !== 0
  })
  return result
}

const uniqueByDate = (weatherArray: WeatherItem[]) => {
  const seenDates: Record<string, boolean> = {}

  const result = weatherArray.filter((item) => {
    const dateKey = item.date.split(' ')[0]
    if (seenDates[dateKey]) {
      return false
    }
    seenDates[dateKey] = true
    return true
  })
  return result
}

// create extendedWeather array
export const createExtendedWeatherStructure = (
  extended: any,
): ExtendedWeatherData[] => {
  if (!extended?.list) return []
  const result = extended.list.map((item: any) => ({
    date: item.dt_txt,
    description: item.weather[0]?.description,
    icon: item.weather[0]?.icon,
    id: item.weather[0]?.id,
    temp: item.main?.temp,
  }))

  const filteredArray = uniqueByDate(result)
  const finalArray = removeFirstItem(filteredArray)
  return finalArray as ExtendedWeatherData[]
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
  return {
    weather: currentWeather,
    forecast: extendedWeather,
  }
}
