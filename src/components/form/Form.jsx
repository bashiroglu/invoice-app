import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import initialValues from '../../data/initialValues';
import { submitInvoice } from '../../redux/invoices/invoices.actions';
import validationSchema from '../../validation/form';
import { StyledForm } from './Form.styles';
import FormButtonContainer from './FormButtonContainer';
import FormFields from './FormFields';

const Form = ({ id }) => {
  const dispatch = useDispatch();
  const state = useSelector((s) => s.invoiceDetails.invoiceDetails);

  const {
    location: { pathname }
  } = useHistory();

  const newOrEditValues = pathname.includes('edit')
    ? state
    : initialValues;

  return (
    <Formik
      initialValues={newOrEditValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        dispatch(submitInvoice(values));
      }}
    >
      {({ values, handleBlur, handleSubmit }) => (
        <StyledForm onSubmit={handleSubmit}>
          <FormFields values={values} handleBlur={handleBlur} />
          <FormButtonContainer id={id} />
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
