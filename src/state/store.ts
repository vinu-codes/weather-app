import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weather/reducers'

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
})

export { store }
