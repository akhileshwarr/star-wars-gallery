import React from 'react';

import { Text } from './Text';
import { ThemeContext, themes } from '../../context/theme';

export default {
  title: 'Text',
  component: Text,
};

const Template = (args) => <ThemeContext.Provider value = {args.theme} ><Text {...args} /></ThemeContext.Provider>;

export const Dark = Template.bind({});
Dark.args = {
  label: 'Text',
  theme : themes.dark,
  children: "Sample text"

};

export const Light = Template.bind({});
Light.args = {
  label: 'Text',
  theme : themes.light,
  children: "Sample text"
};

