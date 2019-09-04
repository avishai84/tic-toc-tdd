import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import {expect} from 'chai';



describe('testing if class on wrapper exist', () => {
  it('will check if .square class present', () => {
    const component = shallow(<Sqaure></Sqaure>);
     expect(component.exists('.square')).to.equal(true);
  })
})



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
