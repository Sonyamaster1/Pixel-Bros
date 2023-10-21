import { useEffect } from 'react'
import './App.css'
import GameEngaine from './components/game_engaine'

function App() {
  useEffect(() => {
    const fetchServerData = async () => {
      const url = `http://localhost:${__SERVER_PORT__}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    fetchServerData()
  }, [])
  return <GameEngaine />
}

export default App
