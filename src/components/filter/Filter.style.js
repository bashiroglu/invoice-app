import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.text};
  font-weight: bold;
  font-size: 12px;
  margin-left: auto;
  margin-right: 1.8rem;
  display: flex;
  gap: 1rem;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  color: ${({ theme }) => theme.invoiceSelect.fg};
  position: absolute;
  top: 2.5rem;
  left: -30%;
  width: 17rem;
  height: 12rem;
  border-radius: 8px;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
  overflow: hidden;
  background: ${({ theme }) => theme.invoiceSelect.bg};
`;

export const ListItem = styled.div`
  text-transform: capitalize;
  padding: 1.2rem 2.5rem;
  color: ${({ theme }) => theme.invoiceSelect.fg};
  background: ${({ theme }) => theme.invoiceSelect.bg};
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.invoiceSelect.hover};
  }
`;

export const StyledFilterOptions = styled.div``;
