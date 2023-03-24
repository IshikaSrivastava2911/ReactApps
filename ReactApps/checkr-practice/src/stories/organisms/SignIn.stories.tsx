import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SignIn } from '../../components/organisms/SignIn';



export default {
  title: 'Example/Organisms/SignInCard',
  component: SignIn,
  argTypes: {
    
  },
} as ComponentMeta<typeof SignIn>;

//create a template of how args are map to rendering

export const Template: ComponentStory<typeof SignIn> = () => <SignIn  />;

//each story reuses that template


// export const TextLink = Template.bind({});

// TextLink.args = {
//     href:'PrivacyPolicy.com',
//     text: 'Privacy Policy',
// };

// export const TextLink1 = Template.bind({});

// TextLink1.args = {
//     href:'./Input.tsx',
//     text: 'Resend OTP',
// };
// export const TextLink2 = Template.bind({});

// TextLink2.args = {
//     href:'namepage.tsx',
//     text: 'John Doe',
// };
