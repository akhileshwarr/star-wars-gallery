import React  from 'react';

import { ThemeSwitch } from './ThemeSwitch';

export default {
  title: 'ThemeSwitch',
  component: ThemeSwitch,
};


const Template = (args) =><ThemeSwitch {...args} />;

export const themeSwitch = Template.bind({});
themeSwitch.args = {
  label: 'ThemeSwitch',
  checked : false,
  toggleTheme: ()=>{}

};
