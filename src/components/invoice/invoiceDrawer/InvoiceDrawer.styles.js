import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.aside)`
  background: ${({ theme }) => theme.drawerBg};
  padding: 5rem;
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
`;
