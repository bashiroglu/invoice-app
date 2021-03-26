import { Button, Heading } from '../../common';
import { BillToFrom, Flex } from '../Form.styles';
import FormItemListTags from '../formItemListTags/FormItemListTags';
import FormLabel from '../formLabel/FormLabel';
import ItemListInputs from '../formItemListInputs/FormItemListInputs';
import { Field } from 'formik';
import FormSelect from '../formSelect/FormSelect';

const FormFields = ({ handleBlur }) => {
  return (
    <>
      <BillToFrom>Bill From</BillToFrom>
      <Field
        handleBlur={handleBlur}
        as={FormLabel}
        large
        name='senderAddress.street'
        text='Street Address'
        type='text'
      />
      <Flex mb='3'>
        <Field
          handleBlur={handleBlur}
          as={FormLabel}
          mr
          name='senderAddress.city'
          text='City'
          type='text'
        />
        <Field
          handleBlur={handleBlur}
          as={FormLabel}
          mr
          postCode
          name='senderAddress.postCode'
          text='Post Code'
          type='text'
        />
        <Field
          handleBlur={handleBlur}
          as={FormLabel}
          mr
          name='senderAddress.country'
          text='Country'
          type='text'
        />
      </Flex>
      <BillToFrom>Bill To</BillToFrom>
      <Field
        handleBlur={handleBlur}
        as={FormLabel}
        large
        name='clientName'
        text='Client’s Name'
        type='text'
      />
      <Field
        handleBlur={handleBlur}
        as={FormLabel}
        large
        name='clientEmail'
        text='Client&#39;s email'
        type='text'
      />
      <Field
        handleBlur={handleBlur}
        as={FormLabel}
        large
        name='clientAddress.street'
        text='Street Address'
        type='text'
      />

      <Flex mb='3'>
        <Field
          handleBlur={handleBlur}
          as={FormLabel}
          mr
          name='clientAddress.city'
          type='text'
          text='City'
        />
        <Field
          handleBlur={handleBlur}
          as={FormLabel}
          mr
          name='clientAddress.postCode'
          type='text'
          postCode
          text='Post Code'
        />
        <Field
          handleBlur={handleBlur}
          as={FormLabel}
          name='clientAddress.country'
          type='text'
          text='Country'
        />
      </Flex>
      <Flex>
        <Field
          handleBlur={handleBlur}
          as={FormLabel}
          half
          name='invoiceDate'
          type='date'
          text='Invoice Date'
        />
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
      <div>
        <Heading mt='4' color='#777F98'>
          Item List
        </Heading>
        <div>
          <FormItemListTags />
          <ItemListInputs handleBlur={handleBlur} />
        </div>
        <Button type='button' sixth>
          + Add New Item
        </Button>
      </div>
    </>
  );
};

export default FormFields;
