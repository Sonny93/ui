import emotionStyled from '@emotion/styled';

export type ButtonProps = { danger?: boolean };

const Button = emotionStyled.button<ButtonProps>(
  ({ theme, danger = false }) => {
    const btnColor = !danger ? theme.colors.primary : theme.colors.lightRed;
    const btnDarkColor = !danger
      ? theme.colors.darkBlue
      : theme.colors.lightRed;
    return {
      cursor: 'pointer',
      width: '100%',
      textTransform: 'uppercase',
      fontSize: theme.fontSizes.m,
      color: theme.colors.white,
      background: btnColor,
      padding: '0.75em',
      border: `1px solid ${btnColor}`,
      borderRadius: theme.borders.radius.m,
      transition: theme.transitions.delay.normal,

      '&:disabled': {
        cursor: 'not-allowed',
        opacity: '0.5',
      },

      '&:not(:disabled):hover': {
        boxShadow: `${btnDarkColor} 0 0 3px 1px`,
        background: btnDarkColor,
        color: theme.colors.white,
      },
    };
  }
);

export default Button;
