import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeSwitch } from './ThemeSwitch.js';

test('/ThemeSwitch renders snapshot', () => {
    const tree = renderer.create(<ThemeSwitch />).toJSON();
    expect(tree).toMatchSnapshot();
  });
