import React from 'react'
import WeatherIcon from './WeatherIcon'
import { useSelector } from 'react-redux'
import { currentWeather } from '@state/weather'
import { isInitial } from '@state/app'
import directionImg from '../../assets/weather/direction.png'
import humid from '../../assets/weather/humid.png'
import wind from '../../assets/weather/wind.png'

const CurrentWeather = () => {
  const weather = useSelector(currentWeather)
  const isAppInitialised = useSelector(isInitial)

  if (!isAppInitialised) return <></>

  return (
    <div className="bg-white w-full rounded-2xl flex flex-col p-12">
      <div className="text-neutral-500 flex-row">
        <h2 className="font-semibold text-lg">Current Weather</h2>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="left-panel flex flex-col flex-1">
          <span className="text-large font-semibold">{weather?.city}</span>
          <div className="flex items-center sm:pt-8 pb-4 flex-col sm:flex-row">
            <WeatherIcon icon={weather.weather?.icon} />
            <span className="sm:text-8xl text-6xl font-semibold">
              {weather.weather?.temp}
              <sup>&deg;</sup>
            </span>
          </div>
          <span className="text-large font-semibold text-neutral-500">
            {weather.weather?.description}
          </span>
        </div>
        <div className="right-panel flex flex-col flex-1 gap-8 pt-8 sm: pt-0 gap-6">
          <span className="text-lg font-semibold flex">
            <img
              style={{ width: '24px', height: '24px', marginRight: '8px' }}
              src={humid}
              alt="humid"
            />
            Humidity {weather.weather?.humidity}
          </span>
          <span className="text-lg font-semibold flex">
            <img
              style={{ width: '24px', height: '24px', marginRight: '8px' }}
              src={wind}
              alt="wind"
            />
            Wind {weather.weather?.wind?.speed}
          </span>
          <span className="text-lg font-semibold flex">
            <img
              style={{ width: '24px', height: '24px', marginRight: '8px' }}
              src={directionImg}
              alt="direction"
            />
            Wind direction {weather.weather?.wind?.deg}
          </span>
        </div>
      </div>
    </div>
  )
}

export { CurrentWeather }
