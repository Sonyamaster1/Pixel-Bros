export enum Theme {
  PURPLE = 'PURPLE',
  GREEN = 'GREEN',
}

export type User = {
  avatar: string | null
  display_name: string | null
  email: string | null
  first_name: string | null
  id: number | null
  login: string | null
  phone: string | null
  second_name: string | null
}

export type UserSlice = {
  loading: boolean
  user: User
  error: string | undefined
  isAuth: boolean
  theme: Theme
}
