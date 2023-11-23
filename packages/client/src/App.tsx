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

  return <RouterProvider router={router} />
}

export default App
