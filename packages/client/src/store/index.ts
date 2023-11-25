import { configureStore } from '@reduxjs/toolkit'
import userReducer, {
  initialState as initialUserState,
} from './slices/userSlices'
import { UserSlice } from './slices/type'

export type initialStoreType = {
  user: UserSlice
}

export const initialStore: initialStoreType = {
  user: initialUserState,
}

const createStore = (preloadedState = initialStore) => {
  return configureStore({
    preloadedState,
    reducer: {
      user: userReducer,
    },
  })
}

export const store = createStore()

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export default createStore
