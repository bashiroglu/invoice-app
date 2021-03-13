/**
 * invoice page
 * invoice list
 * invoice
 *
 * invoice/invoiceid
 */

import {
  Container,
  Flex,
  StyledActions,
  StyledDetails,
  Text,
} from './InvoiceID.style';

import { Button } from '../common';
import Status from '../Status/Status';
import Tag from '../Tag/Tag';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const InvoiceID = () => {
  let { id } = useParams();
  const invoices = useSelector((state) => state.invoices);
  const { status, description } = Object.values(invoices).find(
    (invoice) => invoice.id == id,
  );

  return (
    <Container>
      <StyledActions>
        <Flex>
          <Text>Status</Text>
          <Status status={status}>{status}</Status>
        </Flex>
        <Button third>Edit</Button>
        <Button fifth>Delete</Button>
        <Button second>Mark as Paid</Button>
      </StyledActions>

      <StyledDetails>
        <div>
          <div>
            <Tag>{id}</Tag>
            <Text>{description}</Text>
          </div>
          <div></div>
        </div>
      </StyledDetails>

      {/* 
      <Content>
        <div flex></div>
        <div grid></div>
        </Content>
        <div items></div>
      */}
    </Container>
  );
};

export default InvoiceID;
