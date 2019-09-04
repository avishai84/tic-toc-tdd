import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure , mount} from 'enzyme';
import { expect } from 'chai';
import Square from './components/square/Square';

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

describe('if property onClick point to props.onlick', () => {
  it('onClick property props exists', () => {
    const component = mount(<Square onClick={'props.onClick'}/>);
    expect(component.props().onClick).to.equal('props.onClick');
  })
})
    // expect(component.find('.square').filterWhere((item) => {
    //   console.log(item.debug())
    //   return item.prop('onClick') === props.onClick;
    // })).to.have.lengthOf(1);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
