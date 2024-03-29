module.exports = {
    stories: [
        "../src/**/*.stories.mdx", // arquivos que ele vai procurar como story
        "../src/**/*.stories.@(js|jsx|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-a11y",
    ],
    framework: "@storybook/react",
    core: {
        builder: "@storybook/builder-vite",
    },
    features: {
        storyStoreV7: true,
        interactionsDebugger: true,
    },
    staticDirs: ["../public"],
};
