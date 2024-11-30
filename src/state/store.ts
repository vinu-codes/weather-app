import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weather/reducers'

const store = configureStore({
  reducer: {
    weather: weatherReducer,
  },
})

// RootState is the type of your entire Redux state tree.
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export { store }
