import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { data } from '@state/weather'
// import { fetchWeatherData } from '@state/weather'
import * as weather from '@state/weather/index'
import { AppDispatch } from '@state/store'

console.log(weather)

const SearchBar = () => {
  const [value, setValue] = useState('')
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    // dispatch(fetchWeatherData({ city: 'london' }))
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    console.log({ name, value })
  }

  return (
    <div>
      <input value={value} onChange={handleChange} />
    </div>
  )
}

export { SearchBar }
