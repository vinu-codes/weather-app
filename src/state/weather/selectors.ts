import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectWeatherState = (state: RootState) => state.weather

const loading = createSelector(selectWeatherState, (slice) => slice.loading)
const error = createSelector(selectWeatherState, (slice) => slice.error)
const currentWeather = createSelector(selectWeatherState, (slice) => slice.currentWeather)
const extendedWeather = createSelector(selectWeatherState, (slice) => slice.extendedWeather)

export { loading, error, currentWeather, extendedWeather }
