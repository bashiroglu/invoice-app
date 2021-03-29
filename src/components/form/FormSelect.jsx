import { Field } from 'formik';
import { Text } from '../common';
import { Select } from './Form.styles';

const FormSelect = () => {
  return (
    <label>
      <Text>Payment Terms</Text>
      <Field as={Select} name='paymentTerms'>
        <option value='1d'>Net 1 Days</option>
        <option value='7d'>Net 7 Days</option>
        <option value='14d'>Net 14 Days</option>
        <option value='30d'>Net 30 Days</option>
      </Field>
    </label>
  );
};

export default FormSelect;
