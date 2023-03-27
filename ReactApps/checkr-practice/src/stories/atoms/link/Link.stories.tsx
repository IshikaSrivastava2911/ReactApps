import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './Link';



export default {
  title: 'Example/Atoms/Link',
  component: Link,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Link>;

//create a template of how args are map to rendering

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

//each story reuses that template
export const TextLink = Template.bind({});

TextLink.args = {
    href:'PrivacyPolicy.com',
    text: 'Privacy Policy',
};

export const TextLink1 = Template.bind({});

TextLink1.args = {
    href:'./Input.tsx',
    text: 'Resend OTP',
};
export const TextLink2 = Template.bind({});

TextLink2.args = {
    href:'namepage.tsx',
    text: 'John Doe',
};
