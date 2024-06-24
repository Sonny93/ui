import styled from '@emotion/styled';
import { rgba } from '~/lib/colors';

const TabPanel = styled.div(({ theme }) => ({
  zIndex: 1,
  position: 'relative',
  border: `1px solid ${rgba(theme.colors.blue.default, 0.25)}`,
  padding: '20px',
  marginTop: '-1px',
}));

export default TabPanel;
