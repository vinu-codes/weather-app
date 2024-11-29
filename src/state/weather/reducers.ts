import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeatherByCity, getExtendedWeatherByCity } from '../../services'

type WeatherState = {
  data: []
  loading: boolean
  error: null
}

const initialState: WeatherState = {
  data: [],
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
      const response = await getWeatherByCity(city)
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
      console.log({payload, state})
      //
    })
    builder.addCase(fetchWeatherData.rejected, (state, { payload }) => {
      state.loading = false
    })
  },
})


export default weatherSlice.reducer