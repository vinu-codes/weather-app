import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weather/reducers'
import appReducer from './app/reducers'

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    app: appReducer,
  },
})

// RootState is the type of your entire Redux state tree.
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export { store }
