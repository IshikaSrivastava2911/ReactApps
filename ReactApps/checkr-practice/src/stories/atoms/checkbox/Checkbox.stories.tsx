import { ComponentMeta, ComponentStory } from "@storybook/react";
import CheckBox from "./Checkbox";


export default {
    title: 'Example/Atoms/CheckBox',
    component: CheckBox,
    argTypes: {

    },
}as ComponentMeta<typeof CheckBox>

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const check1 = Template.bind({})
check1.args ={
    type: "checkbox",
    text: "Remember me"
}


