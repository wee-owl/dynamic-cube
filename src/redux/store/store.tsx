import { configureStore } from '@reduxjs/toolkit'
import sideParamsReducer from '../slices/sideSlice'


export const store = configureStore({
  reducer: {
    sideParams: sideParamsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
