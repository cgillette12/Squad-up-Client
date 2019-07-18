
import React from 'react';
import ReactDOM from 'react-dom';
import GameSublist from '../components/GamesSublist/GamesSublist';
import { expect } from 'chai';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing when there is no game', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GameSublist/>, div)
})
it('Render the 3 games in the Game list', () => {
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
    const wrapper = render(
        <GameSublist 
            games={dummies}
        />
        )
    expect(wrapper.find('.GamesListItem')).to.have.lengthOf(3)
    expect(wrapper.text()).equal('Expand +dummy1dummy2dummy3')
})