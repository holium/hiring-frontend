// @ts-ignore
module.exports = {
  core: { builder: "storybook-builder-vite" },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    // config.resolve.alias.foo = "bar";
    // config.server.fs = {
    //   allow: ["../"],
    // };
    config.dedup = ["styled-components", "styled-system"];

    // return the customized config
    return config;
  },
  stories: ["../src/components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-controls",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport/register",
    "@storybook/addon-storysource",
    "@storybook/preset-scss",
  ],
  typescript: {
    check: false,
    reactDocgen: "react-docgen-typescript",
  },
};
