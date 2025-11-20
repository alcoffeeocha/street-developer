import type { Locale } from "./types/global-types";

export const STYLE = {
  fontSize: {
    xs: "0.625rem",
    sm: "0.875rem",
    base: "1.5rem",
    md: "1.625rem",
    lg: "1.75rem",
    xl: "2rem",
    xxl: "3.125rem",
    "3xl": "3.375rem",
  },
  letterSpacing: {
    extraLight: "0",
    medium: "0",
    semiBold: "0",
    bold: "0",
  },
  spacing: {
    md: "16px",
  },
  color: {
    primary: "rgb(37, 34, 113)",
    darkblue: "hsl(242, 53%, 22%)",
    white: "white",
    black: "black",
    grey: "grey",
    blue: "hsl(242, 92%, 32%)",
    mutedblue: "hsl(240, 100%, 70%)",
    green: "hsl(138, 29%, 26%)",
    red: "red",
    pink: "hotpink",
    yellow: "yellow",
  },
  stampSize: {
    small: { width: 28, height: 28, border: 3 },
    large: { width: 78, height: 82, border: 12 },
    larger: { width: 88, height: 94, border: 12 },
  },
};

/**
 * Intrinsic sizes of any assets.
 * Each entry contains [width, height] in pixels representing the intrinsic dimensions.
 */
export const OBJECT_SIZE = {
  iconTrain: [250, 300],
};

export const TRANSLATION: Record<Locale, Record<string, string>> = {
  ID: {
    welcome: "Selamat datang di LRT Jabodebek",
    bound_for: "Kereta ini menuju ke",
  },
  EN: {
    welcome: "Welcome to LRT Jabodebek",
    bound_for: "This train is bound for",
  },
};
