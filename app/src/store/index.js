import { configureStore } from '@reduxjs/toolkit'
import { reducers } from './Slices'

export const store = configureStore({
  reducer: reducers,
})