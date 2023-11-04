import { useEffect } from 'react'
import { signInTransport } from './api/sign-in.transport'
import GameEngaine from './components/game_engaine/'

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
    signInTransport.getUserData()
  }, [])
  return <GameEngaine />
}

export default App
