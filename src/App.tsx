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
          <div>Github Link</div>
        </header>
        <div className="search-bar">
          <SearchBar />
        </div>
        <CurrentWeather />
        <Forecast />
        <footer className="text-center">
          Developed by Vinu
          <a
            href="https://v-codes.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </footer>
      </div>
    </Provider>
  )
}

export default App
