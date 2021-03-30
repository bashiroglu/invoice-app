import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Wrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: rgba(124, 124, 126, 0.5);
`;

export const Container = styled(motion.aside)`
  background: ${({ theme }) => theme.drawerBg};
  padding: 5rem;
  padding-left: 8rem;
  height: 100vh;
  min-height: 100%;
  width: max-content;
  overflow: hidden;
  border-radius: 0 2rem 2rem 0;
  position: absolute;
  top: 0;
  left: -800px;
  bottom: 0;
  z-index: 1;

  @media (min-width: 375px) {
    padding: 2.4rem;
    width: 100%;
  }
`;
