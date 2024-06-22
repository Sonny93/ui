import emotionStyled from '@emotion/styled';

export type ButtonProps = { danger?: boolean; secondary?: boolean };

const Button = emotionStyled.button<ButtonProps>(
  ({ theme, danger = false, secondary = false }) => {
    const btnColor = !danger ? theme.colors.primary : theme.colors.lightRed;
    const btnDarkColor = !danger
      ? theme.colors.darkBlue
      : theme.colors.lightRed;

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
      transition: theme.transitions.delay.normal,

      '&:disabled': {
        cursor: 'not-allowed',
        opacity: '0.5',
      },

      '&:not(:disabled):hover': {
        background: !secondary ? btnDarkColor : theme.colors.secondary,
      },
    };
  }
);

export default Button;
