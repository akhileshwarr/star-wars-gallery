import React from 'react';

import { SWButton } from './SWButton';

export default {
  title: 'SWButton',
  component: Text,
};

const Template = (args) => <SWButton {...args} />;

export const primary = Template.bind({});
primary.args = {
  label: 'SWButton',
  children: "Sample text"
};


