import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Buttons } from '../../../components/atoms/button/Button';

export default {
  title: 'Example/Atoms/Button/SignUp',
  component: Buttons,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Buttons>;

//create a template of how args are map to rendering

const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args} />;

//Template.bind({}) is a standard JavaScript technique for making a copy of a function. We copy the Template so each exported story can set its own properties on it.
//each story reuses that template
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'SignUp',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'SignUp',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'SignUp',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'SignUp',
};




//Controls allows you to interact with a component’s args (inputs) dynamically. Experiment with alternate configurations of the component to discover edge cases.
// Actions help you verify interactions produce the correct outputs via callbacks. For instance, if you view the “Logged In” story of the Header component, we can verify that clicking the “Log out” button triggers the onLogout callback, which would be provided by the component that made use of the Header.
