import styled from '@emotion/styled';

const ModalHeader = styled.h3({
  width: '100%',
  margin: 0,
  marginBottom: '0.75em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ModalCloseBtn = styled.button(({ theme }) => ({
  cursor: 'pointer',
  color: theme.colors.blue.default,
  backgroundColor: 'transparent',
  border: 0,
  padding: 0,
  margin: 0,
}));

export { ModalCloseBtn, ModalHeader };
