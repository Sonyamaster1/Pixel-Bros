import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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
      state.avatar = action.payload.avatar
      state.display_name = action.payload.display_name
      state.email = action.payload.email
      state.first_name = action.payload.first_name
      state.phone = action.payload.phone
      state.second_name = action.payload.second_name
      state.id = action.payload.id
      state.login = action.payload.login
    },
    removeUser(state) {
      state.avatar = null
      state.display_name = null
      state.email = null
      state.first_name = null
      state.phone = null
      state.second_name = null
      state.id = null
      state.login = null
    },
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
