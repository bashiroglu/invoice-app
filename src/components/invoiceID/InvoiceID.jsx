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
import { useSelector } from 'react-redux';
import { useState } from 'react';

const InvoiceID = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id } = useParams();
  const invoices = useSelector((state) => state.invoices);
  const { status, description } =
    Object.values(invoices).find((invoice) => invoice.id == id) || '';

  const {
    push,
    location: { pathname },
  } = useHistory();

  const editPath = pathname + '/edit';
  const endsWithEdit = pathname.endsWith('/edit');

  const pushToEditPath = () => {
    if (!endsWithEdit) push(editPath);
  };

  const cancelDeletion = () => {
    alert('canceled');
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
            <Status status={status}>{status}</Status>
          </Flex>
          <Button third onClick={pushToEditPath}>
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
              <Text>{description}</Text>
            </div>
          </div>
        </StyledDetails>
      </Container>
    </>
  );
};

export default InvoiceID;
