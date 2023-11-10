import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { User, UserSlice } from './type'
import { signInTransport } from '../../api/sign-in.transport'

export const initialState: UserSlice = {
  loading: false,
  error: '',
  isAuth: false,
  user: {
    avatar: null,
    display_name: null,
    email: null,
    first_name: null,
    id: null,
    login: null,
    phone: null,
    second_name: null,
  },
}

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  try {
    return await signInTransport.getUserData()
  } catch (error: unknown) {
    throw new Error((error as Error)?.message)
  }
})

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
  extraReducers: builder => {
    builder.addCase(fetchUser.pending, state => {
      state.loading = true
      state.user = initialState.user
      state.error = ''
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false
      state.user = action.payload as User
      state.isAuth = true
      state.error = ''
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false
      state.isAuth = false
      state.user = initialState.user
      state.error = action.error.message
    })
  },
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer
