import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const ReactTestRenderer = require('react-test-renderer');

describe('when rendering the App component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should match snapshot', () => {
    const component = ReactTestRenderer.create(<App />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
