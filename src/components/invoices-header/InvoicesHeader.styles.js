import styled from 'styled-components';

export const StyledInvoicesHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoBox = styled.div`
  margin-right: auto;
  p {
    font-weight: 500;
    font-size: 12px;
    color: var(--color-gray-2);
  }
`;

export const Filter = styled.p`
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 12px;
  margin-right: 6.5rem;
`;

export const StyledCreateButton = styled.button`
  background-color: var(--color-figure-1);
  color: #fff;
  border: none;
  font-weight: bold;
  font-size: 12px;
  display: flex;
  padding: 0.8rem;
  align-items: center;
  border-radius: 2.4rem;
  padding-right: 1.8rem;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #9277ff;
  }
`;

export const PlusIconContainer = styled.div`
  padding: 1.1rem;
  background-color: #fff;
  border-radius: 50%;
  margin-right: 1.6rem;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
