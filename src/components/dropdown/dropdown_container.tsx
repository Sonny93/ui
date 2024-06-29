import styled from '@emotion/styled';
import Transition from '~/components/_transition';

const DropdownContainer = styled(Transition)<{ show: boolean }>(
  ({ show, theme }) => ({
    zIndex: 99,
    position: 'absolute',
    top: 'calc(100% + 0.5em)',
    right: 0,
    minWidth: '175px',
    backgroundColor: show ? theme.colors.secondary : theme.colors.background,
    border: `2px solid ${theme.colors.secondary}`,
    borderRadius: theme.borders.radius.m,
    boxShadow: theme.colors.boxShadow,
    display: show ? 'flex' : 'none',
    flexDirection: 'column',
    overflow: 'hidden',
  })
);

export default DropdownContainer;
