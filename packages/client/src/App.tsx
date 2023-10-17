// import { useEffect } from 'react'
// import { Link, RouterProvider } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

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
  return <RouterProvider router={router} />
}

export default App
