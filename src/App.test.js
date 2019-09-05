import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure , mount} from 'enzyme';
import { expect } from 'chai';
import Square from './components/square/Square';
import Board from './components/board/Board';

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

//  expect(login.find('img').prop('src')).toEqual(IMAGE_PATH);

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

describe('testing user click', () => {
  let counter = 0;
  const inc = () => counter = counter++;
  it('simulates click events on Square component', () => {
    const component = mount(<Square onClick={inc()} className={'name_'+counter}/>);
    console.log(component.debug());
    expect(component.find('.name_0')).to.have.lengthOf(1);
    component.find('.name_0').simulate('click');
  
    console.log(component.debug())
    expect(component.find('.name_1').length).to.equal(1);
  })
})



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
