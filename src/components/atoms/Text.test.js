import React from 'react';
import renderer from 'react-test-renderer';
import { Text } from './Text.js';

test('/Text renders snapshot', () => {
    const tree = renderer.create(<Text />).toJSON();
    expect(tree).toMatchSnapshot();
  });
