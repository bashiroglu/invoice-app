import { Field } from 'formik';
import FormLabel from './FormLabel';

const FormInvoiceDate = ({ handleBlur }) => {
  return (
    <Field
      handleBlur={handleBlur}
      as={FormLabel}
      half
      name='invoiceDate'
      type='date'
      text='Invoice Date'
    />
  );
};

export default FormInvoiceDate;
