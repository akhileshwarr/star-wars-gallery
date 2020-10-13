import React from 'react';

import { Home } from './Home';
import { ThemeContext, themes } from '../../context/theme';

export default {
  title: 'Home',
  component: Home,
};

const Template = (args) => <ThemeContext.Provider value = {args.theme} ><Home {...args} /></ThemeContext.Provider>;

export const Dark = Template.bind({});
Dark.args = {
  label: 'Home',
  theme : themes.dark,
  checked : false
};

export const Light = Template.bind({});
Light.args = {
  label: 'Home',
  theme : themes.light,
  checked : true
};

