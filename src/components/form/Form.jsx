import { Button, Heading, Text } from '../common';
import { BillToFrom, Flex, Select, StyledForm } from './Form.styles';
import FormButtonContainer from './formButtonContainer/FormButtonContainer';
import FormItemListTags from './formItemListTags/FormItemListTags';
import FormLabel from './formLabel/FormLabel';
import ItemListInputs from './formItemListInputs/FormItemListInputs';

const Form = ({ onFormChange, onFormSubmit, id }) => {
  return (
    <>
      <StyledForm onChange={onFormChange} onSubmit={onFormSubmit}>
        <BillToFrom>Bill From</BillToFrom>
        <FormLabel
          large
          name='fromStreetAdress'
          text='Street Address'
          type='text'
        />
        <Flex mb='3'>
          <FormLabel mr name='fromCity' text='City' type='text' />
          <FormLabel
            mr
            postCode
            name='fromPostCode'
            text='Post Code'
            type='text'
          />
          <FormLabel mr name='fromCountry' text='Country' type='text' />
        </Flex>
        <BillToFrom>Bill To</BillToFrom>
        <FormLabel
          large
          name='toClientName'
          text='Client’s Name'
          type='text'
        />
        <FormLabel
          large
          name='toClientEmail'
          text='Client&#39;s email'
          type='text'
        />
        <FormLabel
          large
          name='toStreetAdress'
          text='Street Address'
          type='text'
        />

        <Flex mb='3'>
          <FormLabel mr name='toCity' type='text' text='City' />
          <FormLabel
            mr
            name='toPostCode'
            type='text'
            postCode
            text='PostCode'
          />
          <FormLabel name='toCountry' type='text' text='Country' />
        </Flex>
        <Flex>
          <FormLabel
            half
            name='invoiceDate'
            type='date'
            text='Invoice Date'
          />
          <label>
            <Text>Payment Terms</Text>
            <Select name='terms'>
              <option value='1d'>Net 1 Days</option>
              <option value='7d'>Net 7 Days</option>
              <option value='14d'>Net 14 Days</option>
              <option value='30d'>Net 30 Days</option>
            </Select>
          </label>
        </Flex>
        <FormLabel
          large
          name='projectDescription'
          type='text'
          text='Project Description'
        />
        <div>
          <Heading mt='4' color='#777F98'>
            Item List
          </Heading>
          <div>
            <FormItemListTags />
            <ItemListInputs />
          </div>
          <Button type='button' sixth>
            + Add New Item
          </Button>
        </div>
        <FormButtonContainer id={id} />
      </StyledForm>
    </>
  );
};

export default Form;
