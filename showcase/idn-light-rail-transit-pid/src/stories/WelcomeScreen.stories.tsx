import type { Meta, StoryObj } from "@storybook/react-vite";
import { useArgs } from "storybook/preview-api";

import WelcomeScreen from "./WelcomeScreen";
import type { Locale } from "../types/global-types";
import type { WelcomeScene } from "../types/scene-types";
import { STYLE } from "../constant";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "LRT PID/Welcome Screen",
  component: WelcomeScreen,

  // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof WelcomeScreen>;

export default meta;

type Story = StoryObj<typeof meta>;

interface UpdateableArgs {
  scene?: WelcomeScene;
  language?: Locale;
}

const commonArgTypes = {
  transitionDelayInSeconds: {
    name: "Transition Delay (Seconds)",
  },
  scene: {
    name: "Scene",
    control: {
      labels: {
        start: "Start",
        destination: "Destination",
      },
    },
  },
  language: {
    name: "Language",
    control: {
      labels: {
        ID: "Indonesia",
        EN: "English",
      },
    },
  },
  routeCode: {
    name: "Line Code",
  },
  routeName: {
    name: "Line Name",
  },

  destinationCode: {
    name: "Final Destination Code",
  },
  destinationName: {
    name: "Final Destination Name",
  },
  routeColor: {
    name: "Line Color",
  },
  onToggle: {
    table: {
      disable: true,
    },
  },
};

const commonRenderFn = function Render(args: Story["args"]) {
  const [{ scene, language }, updateArgs] = useArgs<UpdateableArgs>();
  const getNewScene = () => {
    return scene === "start" ? "destination" : "start";
  };
  const getNewLanguage = () => {
    return language === "ID" ? "EN" : "ID";
  };
  const handleToggle = (stateNames: string[]) => {
    const updatedArgs: UpdateableArgs = {};
    for (const name of stateNames) {
      switch (name) {
        case "scene":
          updatedArgs[name] = getNewScene();
          break;
        case "language":
          updatedArgs[name] = getNewLanguage();
          break;
      }
    }
    updateArgs(updatedArgs);
  };

  return <WelcomeScreen {...args} onToggle={handleToggle} />;
};

export const CibuburLine: Story = {
  args: {
    transitionDelayInSeconds: 5,
    scene: "start",
    language: "ID",
    routeCode: "CB",
    routeName: "Cibubur",
    destinationCode: "01",
    destinationName: "Dukuh Atas BNI",
    routeColor: STYLE.color.blue,
  },
  argTypes: commonArgTypes,
  render: commonRenderFn,
};

export const BekasiLine: Story = {
  args: {
    transitionDelayInSeconds: 5,
    scene: "start",
    language: "ID",
    routeCode: "BK",
    routeName: "Bekasi",
    destinationCode: "14",
    destinationName: "Jati Mulya",
    routeColor: STYLE.color.green,
  },
  argTypes: commonArgTypes,
  render: commonRenderFn,
};
