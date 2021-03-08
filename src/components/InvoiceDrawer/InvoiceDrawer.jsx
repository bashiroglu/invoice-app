import {
  BillToFrom,
  Container,
  Flex,
  Form,
  Input,
  InvoiceID,
  Select,
  Text,
} from './InvoiceDrawer.styles';

import { useState } from 'react';

const InvoiceDrawer = () => {
  // eslint-disable-next-line no-unused-vars
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
      <h2 style={styles.heading}>
        Edit <InvoiceID>#XM9141</InvoiceID>
      </h2>
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
        <Flex>
          <div>
            <label>
              <Text>City</Text>
              <Input mr name='fromCity' type='text' placeholder='London' />
            </label>
          </div>
          <div>
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
          </div>
          <div>
            <label>
              <Text>Country</Text>
              <Input
                name='fromCountry'
                type='text'
                placeholder='United Kingdom'
              />
            </label>
          </div>
        </Flex>
        <BillToFrom>Bill To</BillToFrom>
        <div>
          <label>
            <Text>Client’s Name</Text>
            <Input
              large
              name='toClientName'
              type='text'
              placeholder='Alex Grim'
            />
          </label>
        </div>
        <div>
          <label>
            <Text>Client&#39;s email</Text>
            <Input
              large
              name='toClientEmail'
              type='text'
              placeholder='alexgrim@mail.com'
            />
          </label>
        </div>
        <div>
          <label>
            <Text>Street Address</Text>
            <Input
              large
              name='toStreetAdress'
              type='text'
              placeholder='84 Church Way'
            />
          </label>
        </div>
        <Flex>
          <div>
            <label>
              <Text>City</Text>
              <Input mr name='toCity' type='text' placeholder='Bradford' />
            </label>
          </div>
          <div>
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
          </div>
          <div>
            <label>
              <Text>Country</Text>
              <Input
                name='toCountry'
                type='text'
                placeholder='United Kingdom'
              />
            </label>
          </div>
        </Flex>
        <Flex>
          <div>
            <label>
              <Text>Invoice Date</Text>
              <Input half name='invoiceDate' type='date' />
            </label>
          </div>
          <div>
            <label>
              <Text>Payment Terms</Text>
              <Select name='terms'>
                <option value='1d'>Net 1 Days</option>
                <option value='7d'>Net 7 Days</option>
                <option value='14d'>Net 14 Days</option>
                <option value='30d'>Net 30 Days</option>
              </Select>
            </label>
          </div>
        </Flex>
        <div>
          <label>
            <Text>Project Description</Text>
            <Input
              large
              name='projectDescription'
              type='text'
              placeholder='Graphic Design'
            />
          </label>
        </div>
      </Form>
    </Container>
  );
};

const styles = {
  heading: { marginBottom: '3rem' },
};

export default InvoiceDrawer;
