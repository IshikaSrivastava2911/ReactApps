import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Links } from '../../../components/atoms/links/Link';



export default {
  title: 'Example/Atoms/Link',
  component: Links,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Links>;

//create a template of how args are map to rendering

const Template: ComponentStory<typeof Links> = (args) => <Links {...args} />;

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
