import React, { Component } from 'react'

const GameContext = React.createContext({
  gamesList: [],
  error: null,
  setGamesList: () => {},
  setError: () => {},
  clearError: () => {}
})

export default GameContext

export class GameProvider extends Component {
  // state = {
  //   gamesList: [],
  //   error: null
  // }

  constructor(props) {
    super(props)
    this.state = {
      gamesList: [],
      error: null
    }
  }

  setGamesList = gamesList => {
    this.setState({ gamesList })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      gamesList: this.state.gamesList,
      error: this.state.error,
      setGamesList: this.setGamesList,
      setError: this.setError,
      clearError: this.clearError
    }

    return (
      <GameContext.Provider value={value}>
        {this.props.children}
      </GameContext.Provider>
    )
  }
}
