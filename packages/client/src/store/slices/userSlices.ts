import { createSlice } from '@reduxjs/toolkit'
import { User } from './type'

export const initialState: User = {
  avatar: null,
  display_name: null,
  email: null,
  first_name: null,
  id: null,
  login: null,
  phone: null,
  second_name: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload }
    },
    removeUser(state) {
      return { ...state, ...initialState }
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
