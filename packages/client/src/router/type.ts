import { ReactElement } from 'react'

type RouteType = {
  path: string
  element: ReactElement
}

export type RouterType = {
  element: ReactElement
  children: RouteType[]
}
