import React, { useState, useEffect } from "react";
import { themes, ThemeNames, Theme } from "../styles/themes";
import { getSafeContext } from "../utils/getSafeContext";

type ThemeContextProps = {
  themeName: ThemeNames;
  toggleTheme: () => void;
};

export const ThemeSelectorContext =
  React.createContext<ThemeContextProps | null>(null);

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [themeName, setThemeName] = useState<ThemeNames>("light");
  const [theme, setTheme] = useState<Theme>(themes[themeName]);

  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
      setThemeName("light");
    } else {
      setTheme(themes.dark);
      setThemeName("dark");
    }
  };
  const setCSSVariables = (theme: Theme) => {
    Object.entries(theme).map(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  };

  useEffect(() => {
    setCSSVariables(theme);
  }, [theme, themeName]);
  return (
    <ThemeSelectorContext.Provider value={{ themeName, toggleTheme }}>
      {children}
    </ThemeSelectorContext.Provider>
  );
};

export const useThemeContext = getSafeContext(
  ThemeSelectorContext,
  "ThemeSelector Context"
);
