import React from 'react';
import { expect } from 'chai';
import Enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import SquadListItem from '../src/components/SquadListItem/SquadListItem'

Enzyme.configure({ adapter: new Adapter() });


it('renders SquadListItem without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SquadListItem/>, div)
})
it('renders SquadListItem and and squad members', () => {
  const dummyMembers = [{
    img: '1'
  },
  {
    img: '2'
  },
  {
    img: '3'
  }
]
const wrapper = render(
  <SquadListItem 
      members={dummyMembers}
  />
  )

expect(wrapper.find('.SquadListItem__squad-members')).to.have.lengthOf(3)
expect(wrapper.text()).equal('Expand +123')
})
