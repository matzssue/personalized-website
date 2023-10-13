export type Theme = {
  primary: string;
};

export type ThemeNames = "dark" | "light";

export type Themes = Record<ThemeNames, Theme>;

export const themes: Themes = {
  dark: {
    primary: "#fd1d2078",
  },
  light: {
    primary: "#cde30878",
  },
};
