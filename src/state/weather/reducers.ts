import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeatherByCity, getExtendedWeatherByCity } from '../../services'
import { transformWeather } from '../../utils/transformWeather'
import { ExtendedWeatherData } from '../../services/types'

type WeatherState = {
  currentWeather: {}
  extendedWeather: ExtendedWeatherData[]
  loading: boolean
  error: null
}

const initialState: WeatherState = {
  currentWeather: {},
  extendedWeather: [],
  loading: false,
  error: null,
}

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async (
    { city }: { city: string },
    { rejectWithValue, fulfillWithValue, dispatch },
  ) => {
    try {
      const response = await Promise.all([
        getWeatherByCity(city),
        getExtendedWeatherByCity(city),
      ])
      return response
    } catch (error) {
      return rejectWithValue(error || 'an error occured')
    }
  },
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeatherData.pending, (state, { payload }) => {
      state.loading = true
    })
    builder.addCase(fetchWeatherData.fulfilled, (state, { payload }) => {
      console.log({ payload })
      const result = transformWeather(payload)
      state.currentWeather = result.weather
      state.extendedWeather = result.forecast
    })
    builder.addCase(fetchWeatherData.rejected, (state, { payload }) => {
      state.loading = false
    })
  },
})

export default weatherSlice.reducer
