import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import GameSquadsList from '../src/components/GameSquadsList/GameSquadsList'




test('Gives list of Squads avaliable to join for specific games. and onClicking join will join that squad. ', () =>{
  
  const {getByText} = render(<GameSquadsList />)
  
  

})

