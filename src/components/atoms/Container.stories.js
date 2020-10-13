import React from 'react';

import { Container } from './Container';
import { ThemeContext, themes } from '../../context/theme';

export default {
  title: 'Container',
  component: Container,
};

const Template = (args) => <ThemeContext.Provider value = {args.theme} ><Container {...args} /></ThemeContext.Provider>;

export const Dark = Template.bind({});
Dark.args = {
  label: 'Container',
  theme : themes.dark,
  children: "Sample text"
};

export const Light = Template.bind({});
Light.args = {
  label: 'Container',
  theme : themes.light,
  children: "Sample text"
};

