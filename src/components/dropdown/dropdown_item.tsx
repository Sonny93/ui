import styled from '@emotion/styled';
const DropdownItemBase = styled('div', {
  shouldForwardProp: (propName) => propName !== 'danger',
})<{ danger?: boolean }>(({ theme, danger }) => ({
  fontSize: '14px',
  whiteSpace: 'nowrap',
  color: danger ? theme.colors.red.default : theme.colors.blue.default,
  padding: '8px 12px',
  borderRadius: theme.borders.radius.m,

  '&:hover': {
    backgroundColor: theme.colors.background,
  },
}));

const DropdownItemButton = styled(DropdownItemBase)({
  display: 'flex',
  gap: '0.75em',
  alignItems: 'center',
});

const DropdownItemLink = styled(DropdownItemBase.withComponent('a'))({
  width: '100%',
  display: 'flex',
  gap: '0.75em',
  alignItems: 'center',
});

export { DropdownItemButton, DropdownItemLink };
