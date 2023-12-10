export const initialState = {
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

export const initialStore = {
  user: initialState,
}
