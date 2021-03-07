import styled from 'styled-components';

const InvoiceDrawer = () => {
  return (
    <Container>
      <Heading>
        Edit <Hashtag>#</Hashtag>XM9141
      </Heading>
      <Form>
        <BillToFrom>Bill From</BillToFrom>
        <Label>
          <Text>Street Address</Text>
          <Input large type='text' value='19 Union Terrace' />
        </Label>
        <Flex>
          <div>
            <Label>
              <Text>City</Text>
              <Input mr type='text' value='London' />
            </Label>
          </div>
          <div>
            <Label>
              <Text>Post Code</Text>
              <Input mr postCode type='text' value='e1 3ez' />
            </Label>
          </div>
          <div>
            <Label>
              <Text>Country</Text>
              <Input type='text' value='United Kingdom' />
            </Label>
          </div>
        </Flex>
        <BillToFrom>Bill To</BillToFrom>
        <div>
          <Label>
            <Text>Client’s Name</Text>
            <Input large type='text' value='Alex Grim' />
          </Label>
        </div>
        <div>
          <Label>
            <Text>Client&#39;s email</Text>
            <Input large type='text' value='alexgrim@mail.com' />
          </Label>
        </div>
        <div>
          <Label>
            <Text>Street Address</Text>
            <Input large type='text' value='84 Church Way' />
          </Label>
        </div>
        <Flex>
          <div>
            <Label>
              <Text>City</Text>
              <Input mr type='text' value='Bradford' />
            </Label>
          </div>
          <div>
            <Label>
              <Text>Post code</Text>
              <Input mr type='text' postCode value='BD1 9PB' />
            </Label>
          </div>
          <div>
            <Label>
              <Text>Country</Text>
              <Input type='text' value='United Kingdom' />
            </Label>
          </div>
        </Flex>
        <Flex>
          <div>
            <Label>
              <Text>Invoice Date</Text>
              <Input half type='date' />
            </Label>
          </div>
          <div>
            <Label>
              <Text>Payment Terms</Text>
              <Select name='terms'>
                <option value='1d'>Net 1 Days</option>
                <option value='7d'>Net 7 Days</option>
                <option value='14d'>Net 14 Days</option>
                <option value='30d'>Net 30 Days</option>
              </Select>
            </Label>
          </div>
        </Flex>
        <div>
          <Text>Project Description</Text>
          <Input large type='text' value='Graphic Design' />
        </div>
      </Form>
    </Container>
  );
};

const Container = styled.aside`
  padding: 5rem;
  margin-left: 10rem;
  width: max-content;
  height: 100vh;
`;

const Heading = styled.h2`
  margin-bottom: 5rem;
`;

const Form = styled.form`
  scrollbar-color: #dfe3fa;
  overflow: auto; // I need some help with this
`;

const BillToFrom = styled.p`
  color: var(--color-figure-1);
  font-weight: bold;
  font-size: 1.2rem;
  margin: 2rem 0;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Hashtag = styled.span`
  color: rgb(136, 142, 176);
`;

const Text = styled.p`
  color: rgb(126, 136, 195);
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

const Input = styled.input`
  height: 5rem;
  width: ${({ large }) => (large ? '50rem' : '15rem')};
  border-radius: 4px;
  border: 1px solid #dfe3fa;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  text-indent: 2rem;
  text-transform: ${({ postCode }) => postCode && 'uppercase'};
  margin-bottom: 2rem;

  ${({ mr }) =>
    mr &&
    `
    margin-right: 2.5rem
  `};

  ${({ half }) =>
    half &&
    `
    width: 24rem;
    margin-right: 2rem;
  `};
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Select = styled.select`
  height: 5rem;
  width: 24rem;
  border-radius: 4px;
  border: 1px solid var(--color-figure-1);
  outline: var(--color-figure-1);
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: bold;
  text-indent: 2rem;
  margin-bottom: 2rem;
  background: #fff;
`;

export default InvoiceDrawer;
