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



  it('will find Board if Board component exit', () => {
    const component = shallow(<Board />);
    expect(component.find('.Board').length).to.equal(1);
  })


// describe('if Board component has child of Square', () => {
//   it('will find Square as a child', () => {
//     const component = mount(<Board />);
//     console.log(component.debug())
//     expect(component.matchesElement(<Square></Square>).length).to.equal(true);
//   })
// })


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
