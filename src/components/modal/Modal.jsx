import { Background, Buttons, Popup, Text } from './Modal.style';
import { Button, Heading } from '../common';

import { useHistory } from 'react-router';

const Modal = ({ id, cancelDeletion, deleteInvoice, setModalIsOpen }) => {
  const { push } = useHistory();

  const handleCancel = () => {
    cancelDeletion();
    setModalIsOpen((prevState) => !prevState);
  };

  const handleDelete = () => {
    deleteInvoice();
    push('/invoices');
  };

  return (
    <Background>
      <Popup>
        <Heading fontSize='2' mb='1.3'>
          Confirm Deletion
        </Heading>
        <Text>
          Are you sure you want to delete invoice #{id}? This action cannot
          be undone.
        </Text>
        <Buttons>
          <Button third onClick={handleCancel}>
            Cancel
          </Button>
          <Button fifth onClick={handleDelete}>
            Delete
          </Button>
        </Buttons>
      </Popup>
    </Background>
  );
};

export default Modal;
