import { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "./Text";

export default {
    title: "Components/Text", // Modal na lateral estara como Components > Text
    component: Text,
    // mesma coisa que props
    args: {
        children: "Lorem Ipsum",
        size: "md",
    },
    //opções disponiveis
    argTypes: {
        size: {
            options: ["sm", "md", "lg"],
            control: {
                type: "inline-radio",
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        },
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
        children: <p>Text with p tag</p>,
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            },
        },
        asChild: {
            table: {
                disable: true,
            },
        },
    },
};
