import styled from '@emotion/styled';

// TODO: create a global style variable (fontSize)
const FormFieldError = styled.p(({ theme }) => ({
  fontSize: '12px',
  color: theme.colors.red.default,
}));

export default FormFieldError;
