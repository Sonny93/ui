import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { THEME_LS_KEY } from '~/constants/theme';

export const ThemeContext = createContext({
  isDarkTheme: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggleDarkTheme: (_value: boolean) => {},
});

export default function ThemeContextProvider({
  preferDarkTheme,
  children,
  onPreferenceChange,
}: {
  preferDarkTheme: boolean;
  onPreferenceChange?: (isDarkTheme: boolean) => void;
} & PropsWithChildren) {
  const [isDarkTheme, setDarkTheme] = useState<boolean>(preferDarkTheme);
  const toggleDarkTheme = (value: boolean) => {
    setDarkTheme(value);
    onPreferenceChange?.(value);
  };

  useEffect(() => {
    localStorage.setItem(THEME_LS_KEY, String(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
