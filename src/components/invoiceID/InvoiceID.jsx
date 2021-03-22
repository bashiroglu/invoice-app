import {
  Container,
  Flex,
  StyledActions,
  StyledDetails,
  Text,
} from './InvoiceID.style';
import { useHistory, useParams } from 'react-router-dom';

import { Button } from '../common';
import Modal from '../modal/Modal';
import Status from '../status/Status';
import Tag from '../tag/Tag';
import { useState } from 'react';

const InvoiceID = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id } = useParams();
  const { push } = useHistory();

  const cancelDeletion = () => {
    console.log('canceled');
  };

  const deleteInvoice = () => {
    alert('deleted');
  };

  return (
    <>
      {modalIsOpen && (
        <Modal
          id={id}
          cancelDeletion={cancelDeletion}
          deleteInvoice={deleteInvoice}
          setModalIsOpen={setModalIsOpen}
        />
      )}
      <Container>
        <StyledActions>
          <Flex>
            <Text>Status</Text>
            <Status status={'pending'}>{'Paid'}</Status>
          </Flex>
          <Button third onClick={() => push(`/invoices/edit/${id}`)}>
            Edit
          </Button>
          <Button
            fifth
            onClick={() => setModalIsOpen((prevState) => !prevState)}
          >
            Delete
          </Button>
          <Button second>Mark as Paid</Button>
        </StyledActions>

        <StyledDetails>
          <div>
            <div>
              <Tag>{id}</Tag>
              <Text>{'description'}</Text>
            </div>
          </div>
        </StyledDetails>
      </Container>
    </>
  );
};

export default InvoiceID;
