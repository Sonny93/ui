import styled from '@emotion/styled';
import { fadeInScale } from '~/styles/keyframes';

const Transition = styled.div(({ theme }) => ({
  animation: `${theme.transitions.delay.normal} ${fadeInScale} both`,
}));

export default Transition;
