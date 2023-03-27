import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { M1 } from './M1';

export default {
  title: 'Example/Molecules/M1',
  component: M1,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof M1>;

const Template: ComponentStory<typeof M1> = (args) => <M1 {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
