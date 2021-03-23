import * as Yup from 'yup';

export default Yup.object().shape({
  id: Yup.string().required(),
  createdAt: Yup.string().required('Email field is required'),
  paymentDue: Yup.string().required(),
  description: Yup.string().required(),
  paymentTerms: Yup.string().required(),
  clientName: Yup.string().required(),
  clientEmail: Yup.string().required(),
  status: Yup.string().required(),
  senderAddress: {
    street: Yup.string().required(),
    city: Yup.string().required(),
    postCode: Yup.string().required(),
    country: Yup.string().required(),
  },
  clientAddress: {
    street: Yup.string().required(),
    city: Yup.string().required(),
    postCode: Yup.string().required(),
    country: Yup.string().required(),
  },
  items: [
    {
      name: Yup.string().required(),
      quantity: Yup.string().required(),
      price: Yup.string().required(),
      total: Yup.string().required(),
    },
  ],
  total: Yup.string().required(),
});
