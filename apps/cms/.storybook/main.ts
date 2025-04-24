import storybookConfig from "@repo/storybook-config/main";
export default {
  ...storybookConfig,
  stories: [...storybookConfig.stories, "../src/**/*.stories.tsx"],
};
