import type { Preview } from "@storybook/react-vite";
import GlobalStyle from "../src/global-style";
import Disclaimer from "../src/Disclaimer";
import "../src/global.css";

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          "LRT PID",
          [
            "Welcome Screen",
            "Next Station Screen",
            "Arrival Screen",
            "Train Doors Screen",
          ],
        ],
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyle />
        <Story />
        <Disclaimer />
      </>
    ),
  ],
};

export default preview;
