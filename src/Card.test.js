import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';

it('renders without crashing', () => {
  render(<Card caption="test" src="test.jpg" currNum={1} totalNum={3} />);
});

it('matches snapshot', () => {
  const { asFragment } = render(<Card caption="test" src="test.jpg" currNum={1} totalNum={3} />);
  expect(asFragment()).toMatchSnapshot();
});
