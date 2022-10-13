import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
    title: "Components/Text", // Modal na lateral estara como Components > Text
    component: Text,
    // mesma coisa que props
    args: {
        children: "Lorem Ipsum",
        size: "lg",
    },
} as Meta<TextProps>; // trazer a intelicense para autocomplete

//criar as variações de tamanho
export const Default: StoryObj<TextProps> = {};

export const Small: StoryObj<TextProps> = {
    args: {
        size: "sm",
    },
};

export const Large: StoryObj<TextProps> = {
    args: {
        size: "lg",
    },
};

export const CustomComponent: StoryObj<TextProps> = {
    args: {
        asChild: true,
        children: <p>Testing</p>,
    },
};
