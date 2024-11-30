import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { data as weatherData } from '@state/weather'
import { fetchWeatherData } from '@state/weather'
import { AppDispatch } from '@state/store'
import { useSelector } from 'react-redux'
import searchSvg from '../../assets/search.svg'

const SearchBar = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch<AppDispatch>()
  const data = useSelector(weatherData)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setValue(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(fetchWeatherData({ city: value }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex bg-white rounded-2xl shadow-sm py-2 px-2"
    >
      <img src={searchSvg} alt="search icon" />
      <input
        onChange={handleChange}
        name="search-input"
        value={value}
        className="block bg-white w-full focus:outline-none focus:border-sky-500 rounded-2xl"
      />
    </form>
  )
}

export { SearchBar }
