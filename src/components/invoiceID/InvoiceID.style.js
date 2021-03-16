import { Text as TemplateText } from '../common';
import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  gap: 1.5rem 0;
  background: ${({ theme, drawerOpen }) =>
    drawerOpen && theme.bgOnActiveDrawer};
  transition: var(--transitionSlow);
  min-height: 100vh;
`;

export const StyledActions = styled.div`
  background: ${({ theme }) => theme.invoiceBg};
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  padding: 2.4rem 3.2rem;
  gap: 0 1rem;
  width: 70rem;
  margin-top: 3rem;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 1.5rem;
  margin-right: auto;
`;

export const StyledDetails = styled.div`
  width: 70rem;
  background: ${({ theme }) => theme.invoiceBg};
  border-radius: 0.8rem;
  padding: 5rem;
  display: flex;
`;

export const Text = styled(TemplateText)`
  width: auto;
`;
