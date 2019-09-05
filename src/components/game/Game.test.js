import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure , mount} from 'enzyme';
import { expect } from 'chai';
import Game from './Game';

configure({ adapter: new Adapter() });

describe('test Game', () =>{
  it('Should show X', () =>{
    const component = shallow(<Game/>);
    const para = component.find('p');
    const pText = para.text();
    expect(pText).to.equal('X');
  
  })
})



