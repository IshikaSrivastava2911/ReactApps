import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { Button } from './Button';
import { Heading } from '../../../components/atoms/headings/Heading';

export default {
  title: 'Example/Atoms/Heading',
  component: Heading,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Heading>;

//create a template of how args are map to rendering

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

//each story reuses that template
export const SignIn = Template.bind({});

SignIn.args = {
  text: 'Sign In',
};
export const SignUp = Template.bind({});

SignUp.args = {
  text: 'Sign Up',
};
export const FP = Template.bind({});

FP.args = {
  text: 'Forgot Password?',
};

export const otp = Template.bind({});

otp.args = {
  text: 'Please Enter OTP',
};

