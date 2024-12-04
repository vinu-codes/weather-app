import { createSlice } from '@reduxjs/toolkit'

type ApplicationState = {
  isInitial: boolean
  darkMode?: boolean
}

const initialState: ApplicationState = {
  isInitial: false,
}

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsInitial: (state, { payload }) => {
      state.isInitial = payload
    },
  },
})

export const { setIsInitial } = appSlice.actions;

export default appSlice.reducer
