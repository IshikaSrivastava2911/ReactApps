import { ComponentMeta, ComponentStory } from "@storybook/react";


import { Icon } from "./Icon";

export default {
    title: 'Example/Atoms/Icon',
    component: Icon,
}as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Image = Template.bind({})
Image.args ={
    src :'https://img.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg?w=2000',

    alt:"Icon for landing page"
}
export const Image2 = Template.bind({})
Image2.args ={
    src :'assets/icon.png',

    alt:"Icon for landing page"
}
