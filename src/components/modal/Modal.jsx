import { useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { Button, Heading } from '../common';
import { Background, Buttons, Popup, Text } from './Modal.style';

const Modal = ({ id, cancelDeletion, deleteInvoice, setModalIsOpen }) => {
  const handleCancel = () => cancelDeletion();
  const handleDelete = () => deleteInvoice();
  const html = document.querySelector('html');

  const animation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: 1 }
  };

  const closeModal = (e) => {
    if (e.key == 'Escape') setModalIsOpen(false);
  };

  useEffect(() => {
    id && (html.style.overflow = 'hidden');
    return () => (html.style.overflow = 'visible');
  }, [id]);

  useEffect(() => {
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  }, []);

  return (
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
  );
};

export default Modal;
