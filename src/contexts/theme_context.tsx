import { Global, ThemeProvider, css, useTheme } from '@emotion/react';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { THEME_LS_KEY } from '~/constants/theme';
import { baseTheme } from '~/styles/themes/base_theme';
import { darkThemeColors } from '~/styles/themes/dark_theme';
import { lightThemeColors } from '~/styles/themes/light_theme';

export { ThemeContextProvider, ThemeContext as _ThemeContext };

const ThemeContext = createContext({
  isDarkTheme: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggleDarkTheme: (_value: boolean) => {},
});

function ThemeContextProvider({
  preferDarkTheme = true,
  children,
  onPreferenceChange,
}: {
  preferDarkTheme?: boolean;
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
    <ThemeProvider
      theme={{
        ...baseTheme,
        colors: isDarkTheme ? darkThemeColors : lightThemeColors,
      }}
    >
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleDarkTheme,
        }}
      >
        <StyleReset />
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export function StyleReset() {
  const theme = useTheme();
  const cssReset = css({
    '*': {
      boxSizing: 'border-box',
      outline: 0,
      margin: 0,
      padding: 0,
      scrollBehavior: 'smooth',
    },

    '.reset': {
      backgroundColor: 'inherit',
      color: 'inherit',
      padding: 0,
      margin: 0,
      border: 0,
    },

    a: {
      width: 'fit-content',
      color: theme.colors.blue.default,
      textDecoration: 'none',
      borderBottom: '1px solid transparent',
    },

    b: {
      fontWeight: 600,
      letterSpacing: '0.5px',
    },

    'h1, h2, h3, h4, h5, h6': {
      fontWeight: '500',
      color: theme.colors.blue.default,
    },

    kbd: {
      textShadow: '0 1px 0 #fff',
      fontSize: '12px',
      color: 'rgb(51, 51, 51)',
      backgroundColor: 'rgb(247, 247, 247)',
      padding: '0.25em 0.5em',
      borderRadius: '3px',
      border: '1px solid rgb(204, 204, 204)',
      boxShadow: '0 1px 0 rgba(0, 0, 0, 0.2), 0 0 0 2px #ffffff inset',
      display: 'inline-block',
    },

    hr: {
      width: '100%',
      marginBlock: '1em',
      border: 0,
      borderTop: `1px solid ${theme.colors.background}`,
    },
  });

  const documentStyle = css({
    'html, body, #app': {
      height: '100svh',
      width: '100%',
      fontFamily: "'Poppins', sans-serif",
      fontSize: '14px',
      color: theme.colors.font,
      backgroundColor: theme.colors.background,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
  });

  const scrollbarStyle = css({
    /* width */
    '::-webkit-scrollbar': {
      height: '0.45em',
      width: '0.45em',
    },

    /* Track */
    '::-webkit-scrollbar-track': {
      borderRadius: theme.borders.radius.m,
    },

    /* Handle */
    '::-webkit-scrollbar-thumb': {
      background: theme.colors.blue.default,
      borderRadius: theme.borders.radius.m,

      '&:hover': {
        background: theme.colors.blue.dark,
      },
    },
  });

  const tableStyle = css({
    table: {
      height: 'auto',
      width: '100%',
      borderCollapse: 'collapse',
      borderRadius: theme.borders.radius.m,
      overflow: 'hidden',
    },

    th: {
      textAlign: 'center',
      fontWeight: 400,
      backgroundColor: theme.colors.secondary,
    },

    'td, th': {
      padding: '0.45em',
    },

    'th, td': {
      whiteSpace: 'nowrap',
    },

    'tr:nth-of-type(even)': {
      backgroundColor: theme.colors.secondary,
    },
  });

  return (
    <Global styles={[cssReset, documentStyle, scrollbarStyle, tableStyle]} />
  );
}
