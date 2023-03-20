import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button2 } from './Button';

export default {
  title: 'Example/Atoms/Button/IconBtn',
  component: Button2,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button2>;

//create a template of how args are map to rendering

const Template: ComponentStory<typeof Button2> = (args) => <Button2 {...args} />;

//Template.bind({}) is a standard JavaScript technique for making a copy of a function. We copy the Template so each exported story can set its own properties on it.
//each story reuses that template
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Sign In with Google',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Sign In with Google',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Sign In with Google',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Sign In with Google',
};
