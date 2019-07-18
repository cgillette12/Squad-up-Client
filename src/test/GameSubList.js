/* global test */
import React from 'react';
import { render } from 'react-testing-library';
import GameSublist from '../components/GamesSublist/GamesSublist';
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import { exportAllDeclaration } from '@babel/types';

test('Render the Game list', () => {
    const dummies = [
        {
            id:1,
            image:"",
            game_title:"dummy1",

        },
        {
            id:2,
            image:"",
            game_title:"dummy2",
            
        },
        {
            id:3,
            image:"",
            game_title:"dummy3",
            
        }
    ]
    const {queryByText} = render(
    <GameSublist 
        games={dummies}
    />)
    exportAllDeclaration(queryByText())


})