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

const InvoiceDrawer = () => {
  return (
    <Container>
      <h2 style={styles.heading}>
        Edit <InvoiceID>#XM9141</InvoiceID>
      </h2>
      <Form>
        <BillToFrom>Bill From</BillToFrom>
        <label>
          <Text>Street Address</Text>
          <Input large type='text' value='19 Union Terrace' />
        </label>
        <Flex>
          <div>
            <label>
              <Text>City</Text>
              <Input mr type='text' value='London' />
            </label>
          </div>
          <div>
            <label>
              <Text>Post Code</Text>
              <Input mr postCode type='text' value='e1 3ez' />
            </label>
          </div>
          <div>
            <label>
              <Text>Country</Text>
              <Input type='text' value='United Kingdom' />
            </label>
          </div>
        </Flex>
        <BillToFrom>Bill To</BillToFrom>
        <div>
          <label>
            <Text>Client’s Name</Text>
            <Input large type='text' value='Alex Grim' />
          </label>
        </div>
        <div>
          <label>
            <Text>Client&#39;s email</Text>
            <Input large type='text' value='alexgrim@mail.com' />
          </label>
        </div>
        <div>
          <label>
            <Text>Street Address</Text>
            <Input large type='text' value='84 Church Way' />
          </label>
        </div>
        <Flex>
          <div>
            <label>
              <Text>City</Text>
              <Input mr type='text' value='Bradford' />
            </label>
          </div>
          <div>
            <label>
              <Text>Post code</Text>
              <Input mr type='text' postCode value='BD1 9PB' />
            </label>
          </div>
          <div>
            <label>
              <Text>Country</Text>
              <Input type='text' value='United Kingdom' />
            </label>
          </div>
        </Flex>
        <Flex>
          <div>
            <label>
              <Text>Invoice Date</Text>
              <Input half type='date' />
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
            <Input large type='text' value='Graphic Design' />
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
