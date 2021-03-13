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

const InvoiceID = () => {
  const status = 'pending';

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
            <Tag>XM9141</Tag>
            <Text>Graphic Design</Text>
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
