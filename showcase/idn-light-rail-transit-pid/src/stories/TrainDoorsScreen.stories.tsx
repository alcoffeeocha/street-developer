import type { Meta, StoryObj } from "@storybook/react-vite";

import TrainDoorsScreen from "./TrainDoorsScreen";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "LRT PID/Train Doors Screen",
  component: TrainDoorsScreen,

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof TrainDoorsScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
