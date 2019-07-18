import TokenService from '../../services/token-service'

const LiveChatService = {
  getChat(id) {
    return fetch(`http://localhost:8000/api/chat/${id}`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`
      }
    }).then(res => res.json())
  }
}

export default LiveChatService
