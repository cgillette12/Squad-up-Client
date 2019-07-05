import config from '../config'
import TokenService from './token-service'

const GamesApiService = {
  getGames() {
    return fetch(`${config.API_ENDPOINT}/games`, {
      headers: {
        // 'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  },

  getGame(gameId) {
    return fetch(`${config.API_ENDPOINT}/games/${gameId}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    )
  }
}

export default GamesApiService