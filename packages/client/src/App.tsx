import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { useEffect } from 'react'
import { signInTransport } from './api/sign-in.transport'
import { registerServiceWorker } from './service-worker/register-sw'

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

  useEffect(() => {
    console.log('useEffect')
    registerServiceWorker()
    console.log('useEffect2')
    signInTransport.getUserData()
  }, [])
  return <RouterProvider router={router} />
}

export default App
