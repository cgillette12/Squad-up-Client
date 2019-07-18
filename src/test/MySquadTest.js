import React from 'react';
import { expect } from 'chai';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MySquads from '../components/MySquads/MySquads';
import ReactDOM from 'react-dom';

Enzyme.configure({ adapter: new Adapter() });

it('renders MySquad without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MySquads/>, div)
})
it('Renders MySquads list', () => {
  const dummySquads = ['squad1', 'squad2', 'squad3']
  const wrapper = render(
    <MySquads 
        squads={dummySquads}
    />
    )
expect(wrapper.find('.user-squads-list')).to.have.lengthOf(3)
expect(wrapper.text()).equal('Expand +squad1squad2squad3')
}) 