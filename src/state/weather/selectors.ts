import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectWeatherState = (state: RootState) => state.weather

const loading = createSelector(selectWeatherState, (slice) => slice.loading)
const error = createSelector(selectWeatherState, (slice) => slice.error)
const data = createSelector(selectWeatherState, (slice) => slice.data)

export { loading, error, data }
