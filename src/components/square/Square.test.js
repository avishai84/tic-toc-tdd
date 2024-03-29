import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure , mount} from 'enzyme';
import { expect } from 'chai';
import Square from './Square';

configure({ adapter: new Adapter() });

describe('testing if class square exist', () => {
  it('will check if .square class present', () => {
    const component = mount(<Square></Square>);
     expect(component.exists('.square')).to.equal(true);
  })
})

describe('testing if button elements exist', () => {
  it('will check if buttons exists', () => {
    const component = shallow(<Square/>);
    expect(component.containsMatchingElement(<button></button>)).to.equal(true);
  })
})

describe('testing if Square has property onClick ', () => {
  it('onClick attribute exists', () => {
    const component = mount(<Square/>);
    expect(component.find('.square').get(0).props).to.have.property('onClick');
  })
})

describe('if property onClick point to props.onclick', () => {
  it('onClick property props exists', () => {
    const component = mount(<Square onClick='props.onclick'/>);
    expect(component.props().onClick).to.equal('props.onclick');
  })
})

