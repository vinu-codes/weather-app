import React from 'react'
import WeatherIcon from './WeatherIcon'
import { useSelector } from 'react-redux'
import { currentWeather } from '@state/weather'

const CurrentWeather = () => {
  const weather = useSelector(currentWeather)

  return (
    <div className="bg-white w-full rounded-2xl flex flex-col p-12">
      <div className="text-neutral-500 flex-row">
        <h2>Current Weather</h2>
      </div>
      <div className="flex">
        <div className="left-panel flex flex-col flex-1">
          <span className="text-large">{weather?.city}</span>
          <div className="flex items-center">
            <WeatherIcon icon={weather.weather?.icon} />
            <span className="text-5xl">
              {weather.weather?.temp}
              <sup>&deg;</sup>
            </span>
          </div>
          <span className="text-large">{weather.weather?.description}</span>
        </div>
        <div className="right-panel flex flex-col flex-1 gap-8">
          <span>humidity: {weather.weather?.humidity}</span>
          <span>wind: {weather.weather?.wind?.speed}</span>
          <span>direction: {weather.weather?.wind?.deg}</span>
        </div>
      </div>
    </div>
  )
}

export { CurrentWeather }
