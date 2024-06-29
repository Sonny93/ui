import styled from '@emotion/styled';

export type FormFieldProps = {
  required?: boolean;
  inline?: boolean;
  reverse?: boolean;
};

const FormField = styled('div', {
  shouldForwardProp: (propName) =>
    propName !== 'required' && propName !== 'inline' && propName !== 'reverse',
})<FormFieldProps>(({ theme, required, inline, reverse }) => ({
  display: 'flex',
  gap: '0.25em',
  alignItems: inline ? 'center' : 'flex-start',
  flexDirection: `${inline ? 'row' : 'column'}${reverse ? '-reverse' : ''}`,

  '& label': {
    position: 'relative',
    userSelect: 'none',
    width: 'fit-content',
  },

  '& label::after': {
    position: 'absolute',
    top: 0,
    right: '-0.75em',
    color: theme.colors.red.default,
    content: (required ? '"*"' : '""') as never,
  },
}));

export default FormField;
