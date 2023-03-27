import { ComponentMeta, ComponentStory } from "@storybook/react";


import Input from "./Input";

export default {
    title: 'Example/Atoms/Input',
    component: Input,
    argTypes: {

    },
}as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const TextType = Template.bind({})
TextType.args ={
    type: "text",
    placeHolder: "Enter the username"
}
export const NumType = Template.bind({})
NumType.args ={
    type: "number",
    placeHolder: "Enter the number"
}
export const PassType = Template.bind({})
PassType.args ={
    type: "password",
    placeHolder: "Enter the password"
}
export const EmailType = Template.bind({})
EmailType.args ={
    type: "email",
    placeHolder: "Enter the email"
}
