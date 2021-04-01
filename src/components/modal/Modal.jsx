import OutsideClickHandler from 'react-outside-click-handler';
import { useHistory } from 'react-router';
import { Button, Heading } from '../common';
import { Background, Buttons, Popup, Text } from './Modal.style';
import ScrollLock from 'react-scrolllock';

const Modal = ({ id, cancelDeletion, deleteInvoice, setModalIsOpen }) => {
  const { push } = useHistory();

  const handleCancel = () => {
    cancelDeletion();
    setModalIsOpen((prevState) => !prevState);
  };

  const handleDelete = () => {
    deleteInvoice();
    push('/');
  };

  const animation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: 1 }
  };

  return (
    <ScrollLock>
      <Background
        variants={animation}
        initial='hidden'
        animate='visible'
        exit='hidden'
      >
        <OutsideClickHandler onOutsideClick={handleCancel}>
          <Popup>
            <Heading fontSize='2' mb='1.3'>
              Confirm Deletion
            </Heading>
            <Text>
              Are you sure you want to delete invoice #{id}? This action
              cannot be undone.
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
        </OutsideClickHandler>
      </Background>
    </ScrollLock>
  );
};

export default Modal;
