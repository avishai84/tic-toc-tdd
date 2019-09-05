import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure , mount} from 'enzyme';
import { expect } from 'chai';
import Board from './Board';
import Square from '../square/Square';
configure({ adapter: new Adapter() });


it('will Board component exist', () => {
  const component = shallow(<Board />);
  expect(component.find('.Board').length).to.equal(1);
})

describe('props square', () => {
    it('will find prop square', () => {
        const component = shallow(<Square name='ticToc1'/>);
        expect(component.props().name).to.equal('ticToc1');
    })
  })



