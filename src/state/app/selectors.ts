import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

const selectApplicationState = (state: RootState) => state.app

const isInitial = createSelector(selectApplicationState, (slice) => slice.isInitial)

export { isInitial }
