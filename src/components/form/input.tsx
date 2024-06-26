import styled from '@emotion/styled';

const Input = styled.input(({ theme }) => ({
  width: '100%',
  color: theme.colors.font,
  backgroundColor: theme.colors.secondary,
  padding: '0.75em',
  border: `1px solid ${theme.colors.grey.light}`,
  borderBottom: `2px solid ${theme.colors.grey.light}`,
  borderRadius: theme.borders.radius.m,
  transition: theme.transitions.delay.normal,

  '&:focus': {
    borderBottom: `2px solid ${theme.colors.blue.default}`,
  },

  '&:disabled': {
    opacity: 0.85,
  },

  '&::placeholder': {
    fontStyle: 'italic',
    color: theme.colors.grey.default,
  },
}));

export default Input;
