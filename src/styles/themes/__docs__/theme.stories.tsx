import type { Meta, StoryObj } from '@storybook/react';
import { PropsWithChildren } from 'react';
import tinycolor from 'tinycolor2';
import { ThemeContextProvider } from '~/contexts/theme_context';
import { lightThemeColors } from '~/styles/themes/light_theme';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const COLORS = Object.entries(lightThemeColors).filter((v) => v[1]?.default);

const Column = ({ children }: PropsWithChildren) => (
  <div style={{ display: 'flex', gap: '.25em', flexDirection: 'column' }}>
    {children}
  </div>
);

const Row = ({ children }: PropsWithChildren) => (
  <div style={{ display: 'flex', gap: '.25em' }}>{children}</div>
);

const Box = ({ color }: { color: string }) => (
  <div
    style={{
      height: '3em',
      width: '3em',
      color: tinycolor(color).isDark() ? '#fff' : '#333',
      backgroundColor: color,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'sans-serif',
      borderRadius: '3px',
    }}
  >
    {tinycolor.readability('#fff', color).toFixed(1)}
  </div>
);

const meta: Meta = {
  title: 'Theme',
  component: () => (
    <Column>
      {COLORS.map(([color, fades]) => (
        <Row key={Date.now()}>
          <div
            style={{
              height: '3em',
              width: '3em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'sans-serif',
            }}
          >
            {color}
          </div>
          {Object.values(fades).map((fadeColor) => (
            <Box color={fadeColor} key={fadeColor} />
          ))}
        </Row>
      ))}
    </Column>
  ),
  decorators: [
    (Story) => (
      <ThemeContextProvider preferDarkTheme={false}>
        <Story />
      </ThemeContextProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

export const Theme: Story = {};
