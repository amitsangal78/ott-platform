import { create } from "@storybook/theming/create";
import type { ThemeVars } from "@storybook/theming";

const theme: ThemeVars = create({
  base: "dark",
  brandTitle: "Your Project Name",
  brandUrl: "https://your-project-url.com",
  brandImage: "/logo.png",

  // UI
  appBg: "#1A1A1A",
  appContentBg: "#121212",
  appBorderColor: "#333333",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "#FFFFFF",
  textInverseColor: "#000000",

  // Toolbar colors
  barTextColor: "#FFFFFF",
  barSelectedColor: "#FF5733",
  barBg: "#1A1A1A",

  // Form colors
  inputBg: "#333333",
  inputBorder: "#666666",
  inputTextColor: "#FFFFFF",
  inputBorderRadius: 4,
});

export default theme;
