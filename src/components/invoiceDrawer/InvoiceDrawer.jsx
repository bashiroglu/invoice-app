import {
  BillToFrom,
  ButtonContainer,
  Container,
  DateInput,
  Flex,
  Form,
  Icon,
  IconContainer,
  Input,
  ItemInputs,
  Select,
  Sum,
} from './InvoiceDrawer.styles';
import { Button, Heading, Text } from '../common';
import { useEffect, useReducer, useState } from 'react';

import Tag from '../tag/Tag';
import animationReducer from '../../helpers/animationReducer';
import icon from '../../assets/trash-icon.svg';
import { useParams } from 'react-router';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const InvoiceDrawer = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setFormData] = useState({});
  const { width } = useWindowDimensions();

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

  const [{ state }, dispatch] = useReducer(animationReducer, {});

  useEffect(() => {
    if (width >= '1440' && !width < 1440) dispatch({ type: 'desktop' });
    if (width >= '768' && !width < 375 && width < 1440)
      dispatch({ type: 'tablet' });
    if (width >= '375' && width < 768) dispatch({ type: 'mobile' });
  }, [width]);

  const { id } = useParams();

  return (
    <Container
      initial='initial'
      animate='animate'
      exit='exit'
      variants={state}
    >
      <Heading mb='3'>
        {id ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            Edit <Tag>{id}</Tag>
          </div>
        ) : (
          'New Invoice'
        )}
      </Heading>
      <Form onChange={onFormChange} onSubmit={onFormSubmit}>
        <BillToFrom>Bill From</BillToFrom>
        <label>
          <Text>Street Address</Text>
          <Input large name='fromStreetAdress' type='text' />
        </label>
        <Flex mb='3'>
          <label>
            <Text>City</Text>
            <Input mr name='fromCity' type='text' />
          </label>
          <label>
            <Text>Post Code</Text>
            <Input mr postCode name='fromPostCode' type='text' />
          </label>
          <label>
            <Text>Country</Text>
            <Input name='fromCountry' type='text' />
          </label>
        </Flex>
        <BillToFrom>Bill To</BillToFrom>
        <label>
          <Text>Client’s Name</Text>
          <Input large name='toClientName' type='text' />
        </label>
        <label>
          <Text>Client&#39;s email</Text>
          <Input large name='toClientEmail' type='text' />
        </label>
        <label>
          <Text>Street Address</Text>
          <Input large name='toStreetAdress' type='text' />
        </label>
        <Flex mb='3'>
          <label>
            <Text>City</Text>
            <Input mr name='toCity' type='text' />
          </label>
          <label>
            <Text>Post code</Text>
            <Input mr name='toPostCode' type='text' postCode />
          </label>
          <label>
            <Text>Country</Text>
            <Input name='toCountry' type='text' />
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
          <Input large name='projectDescription' type='text' />
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
                width='20'
              />
              <ItemInputs
                mr='1.5'
                name='qty'
                type='number'
                min='0'
                qty
                width='5'
              />
              <ItemInputs mr='1.5' type='text' name='price' width='10' />
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
                width='20'
              />
              <ItemInputs
                mr='1.5'
                name='qty'
                type='number'
                min='0'
                qty
                width='5'
              />
              <ItemInputs mr='1.5' type='text' name='price' width='10' />
              <div>
                <Sum>156.00</Sum>
              </div>
              <IconContainer ml='4'>
                <Icon src={icon} alt='trash icon' />
              </IconContainer>
            </Flex>
            <Button sixth>+ Add New Item</Button>
          </div>
        </div>
        <ButtonContainer>
          {id ? (
            <>
              <Button type='button' third mr='1'>
                Cancel
              </Button>
              <Button type='submit' second>
                Save Changes
              </Button>
            </>
          ) : (
            <>
              <Button style={{ marginRight: 'auto' }} third type='button'>
                Discard
              </Button>
              <Button type='button' fourth mr='1'>
                Save as Draft
              </Button>
              <Button type='submit' second>
                Save & Send
              </Button>
            </>
          )}
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default InvoiceDrawer;
