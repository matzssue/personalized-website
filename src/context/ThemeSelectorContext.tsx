import React, { useEffect, useState } from 'react';

import { Theme, ThemeNames, themes } from '../styles/themes';
import { getSafeContext } from '../utils/getSafeContext';

type ThemeContextProps = {
  isFirstClick: boolean;
  isImageHidden: boolean;
  setIsFirstClick: React.Dispatch<React.SetStateAction<boolean>>;
  themeName: ThemeNames;
  toggleHideImage: () => void;
  toggleTheme: () => void;
};

export const ThemeSelectorContext = React.createContext<ThemeContextProps | null>(null);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeNames>('light');
  const [theme, setTheme] = useState<Theme>(themes[themeName]);
  const [isFirstClick, setIsFirstClick] = useState(true);
  const [isImageHidden, setIsImageHidden] = useState(false);

  const toggleHideImage = () => {
    setIsImageHidden(!isImageHidden);
  };
  const toggleTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
      setThemeName('light');
    } else {
      setTheme(themes.dark);
      setThemeName('dark');
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
    <ThemeSelectorContext.Provider
      value={{
        themeName,
        toggleTheme,
        isFirstClick,
        setIsFirstClick,
        isImageHidden,
        toggleHideImage,
      }}
    >
      {children}
    </ThemeSelectorContext.Provider>
  );
};

export const useThemeContext = getSafeContext(ThemeSelectorContext, 'ThemeSelector Context');
