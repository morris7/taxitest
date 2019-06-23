import React from 'react';
import ReactDOM from 'react-dom';
import Slider from '../components/Slider';
const ReactTestRenderer = require('react-test-renderer');

describe('when rendering a Slider component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Slider />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(<Slider />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
