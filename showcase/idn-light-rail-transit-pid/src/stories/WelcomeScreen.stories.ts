import type { Meta, StoryObj } from "@storybook/react-vite";

import WelcomeScreen from "./WelcomeScreen";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "LRT PID/Welcome",
  component: WelcomeScreen,

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof WelcomeScreen>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    language: "ID",
    routeCode: "CB",
    routeName: "Cibubur",
    destinationCode: "01",
    destinationName: "Dukuh Atas BNI",
  },
  argTypes: {
    language: {
      name: "Language",
    },
    routeCode: {
      name: "Line Code",
    },
    routeName: {
      name: "Line Name",
    },
    destinationCode: {
      name: "Final Destionation Number",
    },
    destinationName: {
      name: "Final Destination Name",
    },
  },
};
