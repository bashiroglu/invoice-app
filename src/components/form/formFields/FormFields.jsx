import { Field } from 'formik';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, Heading } from '../../common';
import BillFrom from '../billFrom/BillFrom';
import BillTo from '../billTo/BillTo';
import { Flex } from '../Form.styles';
import FormInvoiceDate from '../formInvoiceDate/FormInvoiceDate';
import FormItemListInputs from '../formItemListInputs/FormItemListInputs';
import FormItemListTags from '../formItemListTags/FormItemListTags';
import FormLabel from '../formLabel/FormLabel';
import FormSelect from '../formSelect/FormSelect';

const FormFields = ({ handleBlur }) => {
  const [formItems, setFormItems] = useState({
    [uuid()]: {
      name: '',
      quantity: '',
      price: '',
      total: 0
    }
  });

  const handleAddItemClick = () => {
    setFormItems((prevState) => ({
      ...prevState,
      [uuid()]: {
        name: '',
        quantity: 0,
        price: 0,
        total: 0
      }
    }));
  };

  return (
    <>
      <BillFrom handleBlur={handleBlur} />
      <BillTo handleBlur={handleBlur} />
      <Flex>
        <FormInvoiceDate handleBlur={handleBlur} />
        <FormSelect />
      </Flex>
      <Field
        handleBlur={handleBlur}
        as={FormLabel}
        large
        name='description'
        type='text'
        text='Project Description'
      />
      <>
        <Heading mt='4' color='#777F98'>
          Item List
        </Heading>
        <>
          <FormItemListTags />
          <FormItemListInputs
            formItems={formItems}
            setFormItems={setFormItems}
            handleBlur={handleBlur}
          />
          <Button onClick={() => handleAddItemClick()} type='button' sixth>
            + Add New Item
          </Button>
        </>
      </>
    </>
  );
};

export default FormFields;
