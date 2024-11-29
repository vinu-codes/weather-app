import React from 'react'
import './styles.css'
// import { SearchBar } from '@components/SearchBar/SearchBar'

function App() {
  return (
    <div className="App">
      <header className="flex h-24 items-end justify-between">
        <h1 className="font-bold text-4xl">Weather App</h1>
        <div>Github Link</div>
      </header>
      <div className="search-bar">{/* <SearchBar /> */}</div>
      <footer>
        Developed by Vinu
        <a href="https://v-codes.io/" target="_blank" rel="noopener noreferrer">
          Portfolio
        </a>
      </footer>
    </div>
  )
}

export default App
