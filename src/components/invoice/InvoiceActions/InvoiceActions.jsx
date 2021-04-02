import { useHistory } from 'react-router';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import {
  Flex,
  StyledActions
} from '../../../pages/invoiceDetails/InvoiceDetails.style';
import { Button, Text } from '../../common';
import Status from '../../status/Status';

const InvoiceActions = ({ id, status, setModalIsOpen }) => {
  const { width } = useWindowDimensions();
  const { push } = useHistory();

  return (
    <StyledActions>
      {width < 768 ? (
        <Flex>
          <Text>Status</Text>
          <Status status={status}>{status}</Status>
        </Flex>
      ) : (
        <>
          <Flex>
            <Text>Status</Text>
            <Status status={status}>{status}</Status>
          </Flex>
          <Button third onClick={() => push(`/invoices/edit/${id}`)}>
            Edit
          </Button>
          <Button fifth onClick={() => setModalIsOpen((s) => !s)}>
            Delete
          </Button>
          <Button disabled={status === 'paid'} second>
            Mark as Paid
          </Button>
        </>
      )}
    </StyledActions>
  );
};

export default InvoiceActions;
