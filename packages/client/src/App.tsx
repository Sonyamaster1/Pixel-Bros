import { Route, Routes } from 'react-router-dom'
import { router } from './router'
import { useEffect } from 'react'

export function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}/api`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }
    fetchServerData()
  }, [])

  return (
    <Routes>
      {router.map(route => (
        <Route path="/" element={route.element}>
          {route.children.map(child => (
            <Route path={child.path} element={child.element} />
          ))}
        </Route>
      ))}
    </Routes>
  )
}

export default App
