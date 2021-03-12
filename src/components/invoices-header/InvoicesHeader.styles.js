import styled from 'styled-components';

export const StyledInvoicesHeader = styled.div`
  display: flex;
  align-items: center;
`;
export const InfoBox = styled.div`
  margin-right: auto;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 3.6rem;
    letter-spacing: -1px;
    margin-bottom: 0.8rem;
  }
  p {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: var(--color-gray-2);
  }
`;

export const Filter = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  margin-right: 6.5rem;
`;

export const StyledCreateButton = styled.button`
  background-color: var(--color-figure-1);
  color: var(--color-white);
  border: none;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  display: flex;
  padding: 0.8rem;
  align-items: center;
  border-radius: 2.4rem;
  padding-right: 1.8rem;
  cursor: pointer;
  &:hover {
    background-color: #9277ff;
  }
`;

export const PlusIconContainer = styled.div`
  padding: 1.1rem;
  background-color: var(--color-white);
  border-radius: 50%;
  margin-right: 1.6rem;
  width: 3.2rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
