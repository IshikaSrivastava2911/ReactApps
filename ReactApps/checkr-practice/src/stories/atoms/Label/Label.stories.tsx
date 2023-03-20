import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// import { Button } from './Button';
import { Label } from './Label';

export default {
  title: 'Example/Atoms/Label',
  component: Label,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Label>;

//create a template of how args are map to rendering

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

//each story reuses that template
export const Email = Template.bind({});

Email.args = {
  label: 'Email',
};


export const Password = Template.bind({});

Password.args = {
  label: 'Password',
};

export const ConfirmPassword = Template.bind({});

ConfirmPassword.args = {
  label: 'Confirm Password',
};
export const otp = Template.bind({});

otp.args = {
  label: 'OTP has been sent to your email',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button1',
// };

// export const Large = Template.bind({});
// Large.args = {
//   label: 'Button1',
// };

// export const Small = Template.bind({});
// Small.args = {
//   label: 'Button1',
// };


