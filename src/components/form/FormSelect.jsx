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
  const options = ['Net 1 Day', 'Net 7 Day', 'Net 13 Day', 'Net 30 Day'];
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
  /* color: ${({ theme }) => theme.text}; */
  height: 5rem;
  width: 24rem;
  border-radius: 4px;
  border: 1px solid #dfe3fa;
  outline: var(--color-figure-1);
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  /* text-indent: 2rem; */
  transition: var(--transition);
  position: relative;

  &:is(:active, :focus) {
    border: 1px solid var(--color-figure-1);
  }
`;

const DropDownHeader = styled.div`
  height: 100%;
  width: 100%;
  /* color: gray; */
  text-align: left;
  padding: 1.7rem 0;
  padding-left: 2rem;
  font-weight: bold;
  /* text-align: center; */
  /* text-indent: -1rem; */
  margin-bottom: 8px;
  background: ${({ theme }) => theme.formInputBg};
  border-radius: 4px;
  transition: var(--transition);
`;

const DropDownListContainer = styled.div`
  text-align: center;
  overflow: hidden;
  /* text-indent: -1rem; */
  border-radius: 8px;
  transition: var(--transition);
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
`;

const DropDownList = styled.div`
  transition: var(--transition);
  /* margin: 1rem 0; */
  /* background: gray; */

  /* & > * + * {
    margin: 1rem;
  } */
`;

const ListItem = styled.div`
  padding: 1.5rem 2.4rem;
  /* margin: 1rem 0; */
  /* background: ${({ theme }) => theme.formInputBg}; */
  /* padding: 0 2.4rem; */
  text-align: left;
  background: #fff;
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    color: #7c5dfa;
  }
  &:not(:last-child) {
    border-bottom: 1px solid #dfe3fa;
  }
`;

export default FormSelect;
