import emotionStyled from '@emotion/styled';

export type ButtonProps = { danger?: boolean; secondary?: boolean };

const Button = emotionStyled.button<ButtonProps>(
  ({ theme, danger = false, secondary = false }) => {
    const btnColor = !danger
      ? theme.colors.blue.default
      : theme.colors.red.default;
    const btnDarkColor = !danger
      ? theme.colors.blue.dark
      : theme.colors.red.dark;

    const color = !secondary ? theme.colors.white : btnColor;
    const background = !secondary ? btnColor : 'transparent';

    return {
      cursor: 'pointer',
      width: '100%',
      textTransform: 'uppercase',
      fontSize: theme.fontSizes.m,
      color,
      background,
      padding: '0.75em',
      border: `1px solid ${btnColor}`,
      borderRadius: theme.borders.radius.m,
      transition: theme.transitions.delay.fast,

      '&:disabled': {
        cursor: 'not-allowed',
        opacity: '0.5',
      },

      '&:not(:disabled):hover': {
        background: !secondary ? btnDarkColor : theme.colors.secondary,
        borderColor: !secondary ? btnDarkColor : theme.colors.secondary,
      },
    };
  }
);

export default Button;
