import { Formik } from 'formik';
import initialValues from '../../data/initialValues';
import validationSchema from '../../validation/form';
import { StyledForm } from './Form.styles';
import FormButtonContainer from './FormButtonContainer';
import FormFields from './FormFields';

const Form = ({ id }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      // onSubmit={onFormSubmit}
      onSubmit={(values) => {
        console.log(JSON.stringify(values, null, 2));
      }}
    >
      {({
        values,
        touched,
        errors,
        dirty,
        isSubmitting,
        handleBlur,
        handleSubmit,
        handleReset
      }) => (
        <StyledForm onSubmit={handleSubmit}>
          <FormFields values={values} handleBlur={handleBlur} />
          <FormButtonContainer id={id} />
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
