import styled from '@emotion/styled';
import Transition from '~/components/_transition';

const ModalContainer = styled(Transition)(({ theme }) => ({
  minWidth: '500px',
  background: theme.colors.background,
  padding: '1em',
  borderRadius: theme.borders.radius.m,
  marginTop: '6em',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  boxShadow: theme.colors.boxShadow,

  [`@media (max-width: ${theme.medias.mobile})`]: {
    maxHeight: 'calc(100% - 2em)',
    width: 'calc(100% - 2em)',
    minWidth: 'unset',
    marginTop: '1em',
  },
}));

export default ModalContainer;
