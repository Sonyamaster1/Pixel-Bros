import axios from 'axios'

const getAllLeaderboard = async () => {
  try {
    const url = '/fake_url' // Следует добавить рабочий УРЛ после создания ручки
    const res = await axios.get(url)
    return await res.data
  } catch (err) {
    throw new Error(
      'Error occured while fetching leaderboard. Please try again a little bit later.'
    )
  }
}

export default getAllLeaderboard
