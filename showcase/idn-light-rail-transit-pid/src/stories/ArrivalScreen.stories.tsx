import type { Meta, StoryObj } from "@storybook/react-vite";

import ArrivalScreen from "./ArrivalScreen";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "LRT PID/Arrival Screen",
  component: ArrivalScreen,

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof ArrivalScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
