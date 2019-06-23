import React from 'react';
import ReactDOM from 'react-dom';
import GoogleMap from '../components/GoogleMap';
const ReactTestRenderer = require('react-test-renderer');

describe('when rendering a GoogleMap component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GoogleMap />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(<GoogleMap />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
