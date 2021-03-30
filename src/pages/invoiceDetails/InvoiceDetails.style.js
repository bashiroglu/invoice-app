import styled from 'styled-components/macro';

export const Container = styled.section`
  display: flex;
  align-items: center;
  flex-flow: column wrap;
  gap: 1.5rem 0;
  transition: var(--transitionSlow);
  min-height: 100vh;
`;

export const StyledActions = styled.div`
  background: ${({ theme }) => theme.invoiceBg};
  border-radius: 0.8rem;
  padding: 2.4rem 3.2rem;
  margin-top: 3rem;

  @media (min-width: 375px) {
    width: 35rem;
    justify-content: space-between;
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 90%;
    gap: 0 1rem;
  }
  @media (min-width: 1440px) {
    width: 70rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0 1.5rem;

  @media (min-width: 768px) {
    margin-right: auto;
  }
`;

export const StyledDetails = styled.div`
  background: ${({ theme }) => theme.invoiceBg};
  color: ${({ theme }) => theme.invoiceFg};
  border-radius: 0.8rem;
  /* padding: 5rem;
  display: flex;
  flex-direction: column; */

  @media (min-width: 375px) {
    width: 35rem;
    padding: 2.4rem;
  }
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (min-width: 1440px) {
    width: 70rem;
  }
`;

export const PersonalInformationContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const DetailsText = styled.p`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.5rem;
  letter-spacing: -0.25px;
  color: ${({ theme }) => theme.invoiceDetails.text.fg};
  @media (max-width: 768px) {
    ${({ mb }) => mb && `margin-bottom: ${mb}rem;`};
  }
`;

export const SentTo = styled.div`
  margin: 2rem 0 4rem;
`;

export const StyledId = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.4rem;
  letter-spacing: -0.8px;
  color: ${({ theme }) => theme.text};
`;

export const GeneralInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AdressDetails = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.8rem;
  letter-spacing: -0.229167px;
  color: ${({ theme }) => theme.invoiceDetails.text.fg};
  width: 9.4rem;
  span {
    display: block;
  }
  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
  @media (min-width: 768px) {
    text-align: right;
  }
`;

export const GridContainer = styled.div`
  display: grid;

  @media (min-width: 375px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const FlexParent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const FlexChild = styled.div`
  align-self: flex-end;
`;

export const DetailValues = styled.p`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const StyledInvoiceSummaryTotal = styled.div`
  border-radius: 0px 0px 0.8rem 0.8rem;
  background: ${({ theme }) => theme.sidebarBg};
  padding: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.invoiceSummaryTotal.fg};
  background: ${({ theme }) => theme.invoiceSummaryTotal.bg};

  & > span {
    font-size: 1.1rem;
  }
  & > :last-child {
    font-size: 2rem;
  }
`;

export const StyledInvoiceItemsWrapper = styled.div`
  padding: 2.4rem;
  background: #f9fafe;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  color: #0c0e16;
  background: ${({ theme }) => theme.invoiceDetailsItemsWrapper.bg};
`;

export const ProjectDescription = styled.div`
  color: ${({ theme }) => theme.invoiceDetailsProjectDescription.fg};
`;

export const Quantity = styled.div`
  color: #7e88c3;
`;

export const StyledInvoiceItemsPrice = styled.p`
  color: ${({ theme }) => theme.invoiceDetailsItemsPrice.fg};
`;
