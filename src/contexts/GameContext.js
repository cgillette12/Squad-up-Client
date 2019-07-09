import React, { Component } from 'react'

const GameContext = React.createContext({
  gamesList: [],
  selectedGame: {
    game: '',
    squadsList: []
  },
  gameIsSelected: false,
  error: null,
  setGamesList: () => {},
  clearGamesList: () => {},
  setSelectedGame: () => {},
  clearSelectedGame: () => {},
  setError: () => {},
  clearError: () => {}
})

export default GameContext

export class GameProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gamesList: [],
      selectedGame: {
        game: '',
        squadsList: [],
      },
      gameIsSelected: false,
      error: null
    }
  }

  setGamesList = gamesList => {
    this.setState({ gamesList })
  }

  clearGamesList = () => {
    this.setState({ gamesList: [] })
  }

  setSelectedGame = selectedGame => {
    this.setState({ selectedGame })
    this.setState({ gameIsSelected: true })
  }
  
  clearSelectedGame = () => {
    this.setState({ selectedGame: { game: '', squadsList: [] } })
    this.setState({ gameIsSelected: false })
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
      selectedGame: this.state.selectedGame,
      gameIsSelected: this.state.gameIsSelected,
      error: this.state.error,
      setGamesList: this.setGamesList,
      clearGamesList: this.clearGamesList,
      setSelectedGame: this.setSelectedGame,
      clearSelectedGame: this.clearSelectedGame,
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
