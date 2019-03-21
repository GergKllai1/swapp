import React from 'react';
import { shallow, configure } from 'enzyme';
import Characters from '../src/Characters';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Testing ReassignLocationMenu component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(
      <Characters />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});