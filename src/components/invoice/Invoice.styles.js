import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const InvoiceContainer = styled(Link)`
  background-color: ${({ theme }) => theme.invoiceBg};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  padding: 1.6rem 3.2rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition);
  border: 1px solid transparent;

  &:hover {
    border: 1px solid var(--color-figure-1);
  }

  &:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

export const InvoiceDate = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colorGray};
  min-width: 10.6rem;
  text-align: left;
`;

export const InvoicePersonName = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: var(--color-gray-2);
  min-width: 11rem;
  text-align: left;
`;

export const InvoicePersonAmount = styled.p`
  font-weight: bold;
  font-size: 1.6rem;
  text-align: right;
  color: ${({ theme }) => theme.text};
  min-width: 10.6rem;
  text-align: center;
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
  background: ${({ color }) => `rgba(${color}, 0.15)`};
  border-radius: 8px;
  font-weight: bold;
  text-transform: capitalize;

  span {
    font-size: 12px;
    position: relative;
    margin-right: -1.3rem;
    color: ${({ color }) => `rgb(${color})`};

    &::before {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      left: -1.6rem;
      top: 1px;
      background: ${({ color }) => `rgb(${color})`};
    }
  }
`;
