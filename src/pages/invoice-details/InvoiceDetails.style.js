import { Text as TemplateText } from '../../components/common';
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
  flex-direction: column;
`;

export const Text = styled(TemplateText)`
  width: auto;
`;

export const PersonalInformationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const StyledId = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: -0.8px;
  color: ${({ theme }) => theme.text};
`;
export const Profession = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.sixthFg};
`;
export const GeneralInformation = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AdressDetails = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.8rem;
  text-align: right;
  letter-spacing: -0.229167px;
  color: ${({ theme }) => theme.sixthFg};
  width: 9.4rem;
  span {
    display: block;
  }
`;
export const InvoiceSummary = styled.div``;
export const InvoiceSummaryTotal = styled.div`
  border-radius: 0px 0px 0.8rem 0.8rem;
  background: ${({ theme }) => theme.sidebarBg};
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.secondFg};
`;
