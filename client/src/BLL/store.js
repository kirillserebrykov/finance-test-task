import { configureStore } from '@reduxjs/toolkit'
import { TickersAPI } from './getRequests'
export const store = configureStore({
  reducer: {
    [TickersAPI.reducerPath]: TickersAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(TickersAPI.middleware),

})
