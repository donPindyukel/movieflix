import { configureStore } from '@reduxjs/toolkit'

import { reducers } from './reactReducer'

export const store = configureStore({
  reducer: reducers,
  devTools: true,
})

export type TypeRootState = ReturnType<typeof store.getState>
