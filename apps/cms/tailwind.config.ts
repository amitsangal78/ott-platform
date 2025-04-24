import tailwindConfig from "@repo/tailwind-config";
import shadcnConfig from "@repo/shadcn-config";
import type { Config } from "tailwindcss";

const config: Config = {
  ...tailwindConfig,
  ...shadcnConfig,
  content: [
    ...tailwindConfig.content,
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
};

export default config;
