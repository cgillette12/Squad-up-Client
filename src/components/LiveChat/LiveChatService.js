import config from '../../config'
import TokenService from '../../services/token-service'

const LiveChatService = {
  getChat(id) {
    return fetch(`${config.API_ENDPOINT}/chat/${id}`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => res.json())
  }
}

export default LiveChatService
