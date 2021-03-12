import styled from 'styled-components';

export const InvoiceContainer = styled.div`
  background-color: var(--color-white);
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  padding: 1.6rem 3.2rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;
export const InvoiceDate = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.25px;
`;

export const InvoiceCode = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.25px;
  letter-spacing: -0.25px;
  color: var(--color-font);
  span {
    color: var(--color-figure-3);
  }
`;
export const InvoicePersonName = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: var(--color-gray-2);
`;
export const InvoicePersonAmount = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: right;
  letter-spacing: -0.8px;
  color: var(--color-font);
`;
export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const IconButton = styled.button`
  margin-left: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
export const StatusContainer = styled.div`
  width: 10.4rem;
  text-align: center;
  padding: 1.3rem 1.33rem;
  ${(props) =>
    props.status === 'paid'
      ? `background-color: hsla(160, 23%, 35%, 0.06);
    border-radius: 6px;
    color: rgba(51, 214, 159, 1);
    span {
      &::before {
        background-color: rgba(51, 214, 159, 1);
      }
    }`
      : ''}
  ${(props) =>
    props.status === 'pending'
      ? ` background-color: rgba(255, 143, 0, 0.06);
    border-radius: 6px;
    color: rgba(255, 143, 0, 1);
    span {
      &::before {
        background-color: rgba(255, 143, 0, 1);
      }
    }`
      : ''}
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    position: relative;
    margin-right: -1.3rem;

    &::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;

      border-radius: 50%;
      left: -1.6rem;
      top: 1px;
    }
  }
`;
