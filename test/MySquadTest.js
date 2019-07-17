import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import React from 'react';
import {render, fireEvent} from '@testing-library/react'
import MySquads from '../src/components/MySquads/MySquads'




test('Makes Fetch to BE then updates mySquads list', () =>{
  const squad = 'squad1'
  const {getByText} = render(<MySquads />)
  
  expect(getByText()).toBeNull();
  
  expect(getByText(squad)).toBe('squad1')

})

