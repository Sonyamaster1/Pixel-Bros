import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { useEffect } from 'react'
import { useAppDispatch } from './hooks/redux-hooks'
import { fetchUser } from './store/slices/userSlices'

export function App() {
  // useEffect(() => {
  //   const fetchServerData = async () => {
  //     const url = `http://localhost:${__SERVER_PORT__}`
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log(data)
  //   }

  //   fetchServerData()
  // }, [])
  // return <Link to='/game' className="App">Проверить шрифт</Link>
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchUser())
  }, [])
  return <RouterProvider router={router} />
}

export default App
