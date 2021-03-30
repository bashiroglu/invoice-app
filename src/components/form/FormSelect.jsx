import { Field } from 'formik';
import { Text } from '../common';
// import { Select } from './Form.styles';
import { v4 as uuid } from 'uuid';

// const FormSelect = () => {
//   return (
//     <label>
//       <Text>Payment Terms</Text>
//       <Field as={Select} name='paymentTerms'>
//         <option value='1d'>Net 1 Days</option>
//         <option value='7d'>Net 7 Days</option>
//         <option value='14d'>Net 14 Days</option>
//         <option value='30d'>Net 30 Days</option>
//       </Field>
//     </label>
//   );
// };

import { useState } from 'react';
import styled from 'styled-components/macro';

const FormSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['30d', '14d', '7d', '1d'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggling = () => setIsOpen((s) => !s);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <label>
      <Text>Payment Terms</Text>
      <DropdownContainer>
        <DropDownHeader onClick={toggling}>
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
    </label>
  );
};

const DropdownContainer = styled.div`
  background: ${({ theme }) => theme.formInputBg};
  color: ${({ theme }) => theme.text};
  height: 5rem;
  width: 24rem;
  border-radius: 4px;
  border: 1px solid #dfe3fa;
  outline: var(--color-figure-1);
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  text-indent: 2rem;
  transition: var(--transition);
  position: relative;

  &:is(:active, :focus) {
    border: 1px solid var(--color-figure-1);
  }
`;

const DropDownHeader = styled.div`
  height: 100%;
  width: 100%;
  color: gray;
  padding-top: 1.5rem;
  text-align: center;
  text-indent: -1rem;
  background: ${({ theme }) => theme.formInputBg};
  border-radius: 4px;
  transition: var(--transition);
`;

const DropDownListContainer = styled.div`
  text-align: center;
  text-indent: -1rem;
  border-radius: 4px;
  transition: var(--transition);
`;

const DropDownList = styled.div`
  transition: var(--transition);
  margin: 1rem 0;
  background: gray;

  & > * + * {
    margin: 1rem;
  }
`;

const ListItem = styled.div`
  padding: 1rem 0;
  margin: 1rem 0;
  background: ${({ theme }) => theme.formInputBg};
  transition: var(--transition);
`;

export default FormSelect;
