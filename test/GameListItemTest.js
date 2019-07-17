import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import GameListItem from '../src/components/GamesListItem/GamesListItem'





test('renders the image and name of game and when clicked takes you to game squad list', () =>{
  const gameTitle = 'Apex Legends'
  const {container, getByText} = render(<GameListItem />)
  
  expect(getByText(gameTitle)).toBe('Apex Legends')
  fireEvent.click(container)
  

})

