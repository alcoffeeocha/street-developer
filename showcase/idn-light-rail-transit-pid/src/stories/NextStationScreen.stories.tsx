import type { Meta, StoryObj } from "@storybook/react-vite";

import NextStationScreen from "./NextStationScreen";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "LRT PID/Next Station Screen",
  component: NextStationScreen,

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof NextStationScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
