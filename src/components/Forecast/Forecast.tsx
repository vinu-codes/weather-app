import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { extendedWeather } from '@state/weather'

type WeatherCard = {
  date: string
  description: string
  icon: string
  id: number
  temp: number
}

const convertTime = (time: string) => {
  const date = new Date(time)

  // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const day = daysOfWeek[date.getDay()]

  return day
}

const Forecast = () => {
  const weather = useSelector(extendedWeather) as WeatherCard[]

  const renderCards = (weather: WeatherCard[]) => {
    return weather.map((item) => {
      return (
        <div className="card">
          <span className="text-large font-semibold text-neutral-500 text-black">
            {convertTime(item.date)}
          </span>
          <img
            src={`https://openweathermap.org/img/wn/${item.icon}.png`}
            alt={item.description}
          />
          <span>{item.temp}°C</span>
        </div>
      )
    })
  }
  return (
    <div className="bg-white w-full rounded-2xl flex flex-col p-12 text-neutral-500 font-semibold text-lg">
      Extended Weather - 7 days
      <div className="flex flex-wrap gap-8">{renderCards(weather)}</div>
    </div>
  )
}

export { Forecast }
