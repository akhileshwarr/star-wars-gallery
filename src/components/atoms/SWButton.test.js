import React from 'react';
import renderer from 'react-test-renderer';
import { SWButton } from './SWButton.js';

test('/SWButton renders snapshot', () => {
    const tree = renderer.create(<SWButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });