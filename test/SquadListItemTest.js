import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import SquadListItem from '../src/components/SquadListItem/SquadListItem'
import { exportAllDeclaration } from '@babel/types';




test('Gives list of Squads avaliable to join for specific games. and onClicking join will join that squad. ', () =>{
  const member = 'kate'
  const {getByRole , getByText} = render(<SquadListItem />)
  
  expect(getByText()).toBeNull()
  fireEvent.click(getByText(/Join/i))
  expect(getByText(member)).toBe('kate')


})

