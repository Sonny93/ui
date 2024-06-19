import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ThemeContextProvider from '~/contexts/ThemeContext';
import Button from '../button';

describe('Button component', () => {
  it('Button should render correctly', () => {
    render(<Button />, {
      wrapper: ({ children }) => (
        <ThemeContextProvider preferDarkTheme={true}>
          {children}
        </ThemeContextProvider>
      ),
    });
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
});
