import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import styled from 'styled-components/macro';
import { v4 as uuid } from 'uuid';
import { Text } from '../common';

const FormSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['Net 1 Day', 'Net 7 Day', 'Net 13 Day', 'Net 30 Day'];
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const toggle = () => setIsOpen((s) => !s);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <label>
      <Text>Payment Terms</Text>
      <OutsideClickHandler onOutsideClick={() => setIsOpen(false)}>
        <DropdownContainer>
          <DropDownHeader onClick={toggle}>
            {selectedOption}
          </DropDownHeader>
          {isOpen && (
            <DropDownListContainer>
              <DropDownList>
                {options.map((option) => (
                  <ListItem onClick={onOptionClicked(option)} key={uuid()}>
                    {option}
                  </ListItem>
                ))}
              </DropDownList>
            </DropDownListContainer>
          )}
        </DropdownContainer>
      </OutsideClickHandler>
    </label>
  );
};

const DropdownContainer = styled.div`
  background: ${({ theme }) => theme.formInputBg};
  color: ${({ theme }) => theme.invoiceSelect.fg};
  height: 5rem;
  width: 24rem;
  border-radius: 4px;
  border: 1px solid #dfe3fa;
  outline: var(--color-figure-1);
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  transition: var(--transition);
  position: relative;

  &:is(:active, :focus) {
    border: 1px solid var(--color-figure-1);
  }
`;

const DropDownHeader = styled.div`
  height: 100%;
  width: 100%;
  text-align: left;
  padding: 1.7rem 0;
  padding-left: 2rem;
  font-weight: bold;
  margin-bottom: 8px;
  background: ${({ theme }) => theme.formInputBg};
  border-radius: 4px;
  transition: var(--transition);
`;

const DropDownListContainer = styled.div`
  text-align: center;
  overflow: hidden;
  border-radius: 8px;
  transition: var(--transition);
  background: ${({ theme }) => theme.invoiceSelect.bg};
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
`;

const DropDownList = styled.div`
  transition: var(--transition);
`;

const ListItem = styled.div`
  padding: 1.5rem 2.4rem;
  color: ${({ theme }) => theme.invoiceSelect.fg};
  background: ${({ theme }) => theme.invoiceSelect.bg};
  text-align: left;
  transition: var(--transition);
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.invoiceSelect.hover};
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.invoiceSelect.border};
  }
`;

export default FormSelect;
