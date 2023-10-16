export type Theme = {
  primary: string;
  primaryHover: string;
};

export type ThemeNames = 'dark' | 'light';

export type Themes = Record<ThemeNames, Theme>;

export const themes: Themes = {
  dark: {
    primary: '#fd1d20ad',
    primaryHover: '#fb2c2e',
  },
  light: {
    primary: '#cde30878',
    primaryHover: '#ebff37',
  },
};
