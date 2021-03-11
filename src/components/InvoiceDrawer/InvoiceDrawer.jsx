import {
  BillToFrom,
  ButtonContainer,
  Container,
  DateInput,
  Flex,
  Form,
  Heading,
  Icon,
  IconContainer,
  Input,
  ItemInputs,
  Select,
  Sum,
  Tag,
  Text,
} from './InvoiceDrawer.styles';

import { Button } from '../common';
import icon from '../../assets/trash-icon.svg';
import { useState } from 'react';

const InvoiceDrawer = () => {
  const [_, setFormData] = useState({});

  const onFormSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const onFormChange = (e) => {
    setFormData((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Container>
      <Heading mb='3'>
        Edit <Tag>#</Tag>XM9141
      </Heading>
      <Form onChange={onFormChange} onSubmit={onFormSubmit}>
        <BillToFrom>Bill From</BillToFrom>
        <label>
          <Text>Street Address</Text>
          <Input
            large
            name='fromStreetAdress'
            type='text'
            placeholder='19 Union Terrace'
          />
        </label>
        <Flex mb='3'>
          <label>
            <Text>City</Text>
            <Input mr name='fromCity' type='text' placeholder='London' />
          </label>
          <label>
            <Text>Post Code</Text>
            <Input
              mr
              postCode
              name='fromPostCode'
              type='text'
              placeholder='e1 3ez'
            />
          </label>
          <label>
            <Text>Country</Text>
            <Input
              name='fromCountry'
              type='text'
              placeholder='United Kingdom'
            />
          </label>
        </Flex>
        <BillToFrom>Bill To</BillToFrom>
        <label>
          <Text>Client’s Name</Text>
          <Input
            large
            name='toClientName'
            type='text'
            placeholder='Alex Grim'
          />
        </label>
        <label>
          <Text>Client&#39;s email</Text>
          <Input
            large
            name='toClientEmail'
            type='text'
            placeholder='alexgrim@mail.com'
          />
        </label>
        <label>
          <Text>Street Address</Text>
          <Input
            large
            name='toStreetAdress'
            type='text'
            placeholder='84 Church Way'
          />
        </label>
        <Flex mb='3'>
          <label>
            <Text>City</Text>
            <Input mr name='toCity' type='text' placeholder='Bradford' />
          </label>
          <label>
            <Text>Post code</Text>
            <Input
              mr
              name='toPostCode'
              type='text'
              postCode
              placeholder='BD1 9PB'
            />
          </label>
          <label>
            <Text>Country</Text>
            <Input
              name='toCountry'
              type='text'
              placeholder='United Kingdom'
            />
          </label>
        </Flex>
        <Flex>
          <label>
            <Text>Invoice Date</Text>
            <DateInput half name='invoiceDate' type='date' />
          </label>
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
        <label>
          <Text>Project Description</Text>
          <Input
            large
            name='projectDescription'
            type='text'
            placeholder='Graphic Design'
          />
        </label>
        <div>
          <Heading mt='4' color='#777F98'>
            Item List
          </Heading>
          <div>
            <Flex>
              <Text mr='1.5' width='20'>
                Item Name
              </Text>
              <Text mr='1.5' width='5'>
                Qty
              </Text>
              <Text mr='1.5' width='10'>
                Price
              </Text>
              <Text mr='1.5' width='10'>
                Total
              </Text>
            </Flex>
            <Flex mb='1.8'>
              <ItemInputs
                mr='1.5'
                type='text'
                name='itemName'
                placeholder='Banner Design'
                width='20'
              />
              <ItemInputs
                mr='1.5'
                name='qty'
                type='number'
                min='0'
                defaultValue='0'
                qty
                width='5'
              />
              <ItemInputs
                mr='1.5'
                type='text'
                name='price'
                placeholder='156.00'
                width='10'
              />
              <div>
                <Sum>156.00</Sum>
              </div>
              <IconContainer ml='4'>
                <Icon src={icon} alt='trash icon' />
              </IconContainer>
            </Flex>
          </div>
          <div>
            <Flex mb='1.8'>
              <ItemInputs
                mr='1.5'
                type='text'
                name='itemName'
                placeholder='Banner Design'
                width='20'
              />
              <ItemInputs
                mr='1.5'
                name='qty'
                type='number'
                min='0'
                defaultValue='0'
                qty
                width='5'
              />
              <ItemInputs
                mr='1.5'
                type='text'
                name='price'
                placeholder='156.00'
                width='10'
              />
              <div>
                <Sum>156.00</Sum>
              </div>
              <IconContainer ml='4'>
                <Icon src={icon} alt='trash icon' />
              </IconContainer>
            </Flex>
            <Button newItem>+ Add New Item</Button>
          </div>
        </div>
        <ButtonContainer>
          <Button edit mr='1'>
            Cancel
          </Button>
          <Button primary>Save Changes</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default InvoiceDrawer;
