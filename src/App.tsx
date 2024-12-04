import React from 'react'
import './styles.css'
import { store } from './state/store'
import { Provider } from 'react-redux'
import { SearchBar } from '@components/SearchBar/SearchBar'
import { CurrentWeather } from '@components/CurrentWeather/CurrentWeather'
import { Forecast } from 'components/Forecast/Forecast'

function App() {
  return (
    <Provider store={store}>
      <div className="App flex flex-col gap-5">
        <header className="flex h-24 items-end justify-between">
          <h1 className="font-bold text-4xl">Weather App</h1>
          <a
            href="https://github.com/vinu-codes/weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path
                d="M20,4A16.2,16.2,0,0,0,4,20.4,16.375,16.375,0,0,0,14.943,35.97c.8.15,1.094-.352,1.094-.79,0-.39-.016-1.42-.021-2.787-4.453.988-5.391-2.2-5.391-2.2a4.342,4.342,0,0,0-1.776-2.4c-1.453-1.014.109-.993.109-.993a3.37,3.37,0,0,1,2.448,1.687,3.362,3.362,0,0,0,4.656,1.367,3.564,3.564,0,0,1,1.016-2.195c-3.552-.411-7.286-1.821-7.286-8.106a6.448,6.448,0,0,1,1.646-4.405,6.057,6.057,0,0,1,.156-4.341s1.344-.438,4.4,1.682a14.859,14.859,0,0,1,8.01,0c3.057-2.12,4.4-1.682,4.4-1.682a6.009,6.009,0,0,1,.161,4.341A6.42,6.42,0,0,1,30.2,19.55c0,6.3-3.739,7.684-7.3,8.1a3.959,3.959,0,0,1,1.083,3.033c0,2.195-.016,3.962-.016,4.5,0,.438.286.95,1.1.79A16.378,16.378,0,0,0,36,20.4,16.2,16.2,0,0,0,20,4Z"
                transform="translate(-4 -4)"
              />
            </svg>
          </a>
        </header>
        <div className="search-bar">
          <SearchBar />
        </div>
        <CurrentWeather />
        <Forecast />
        <footer className="text-center">
          Developed by{' '}
          <a
            href="https://v-codes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vinu
          </a>
        </footer>
      </div>
    </Provider>
  )
}

export default App
