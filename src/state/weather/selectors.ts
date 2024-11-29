import { createSelector } from '@reduxjs/toolkit'

const selectWeatherState = (state: any) => state.weather

const loading = createSelector(selectWeatherState, (slice) => slice.loading)

export { loading }
