import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure , mount} from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
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

it('will find Board if Board component exit', () => {
  const component = shallow(<Board />);
  expect(component.find('.Board').length).to.equal(1);
})

it('will find Square as a child of Board', () => {
  const component = shallow(<Board />);
  console.log(component.debug())
  expect(component.contains(<Square/>)).to.equal(true);
})

it('will test Square for prop name square ', () => {
  const component = shallow(<Board />);
  console.log(component.debug())
  expect(component.find(<Square/>).get(0).props.children).to.be.equal('square');
})


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
