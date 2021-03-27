import { Formik } from 'formik';
// import { useState } from 'react';
import initialValues from '../../data/initialValues';
import validationSchema from '../../validation/form';
import { StyledForm } from './Form.styles';
import FormButtonContainer from './formButtonContainer/FormButtonContainer';
import FormFields from './formFields/FormFields';

const Form = ({ id }) => {
  // const [formData, setFormData] = useState(initialValues);

  // const onFormSubmit = ({ e, values }) => {
  // e.preventDefault();
  // console.log(JSON.stringify(values, null, 2));
  // e.target.reset();
  // };

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
          <pre>{JSON.stringify({ values }, null, 2)}</pre>
          <FormFields handleBlur={handleBlur} />
          <FormButtonContainer id={id} />
        </StyledForm>
      )}
    </Formik>
  );
};

export default Form;
