import * as Yup from 'yup';

export default Yup.object().shape({
  id: Yup.string().required(),
  createdAt: Yup.date().default(() => new Date()),
  paymentDue: Yup.string().required(),
  description: Yup.string().required(),
  paymentTerms: Yup.number().required().positive().integer(),
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
      quantity: Yup.number().required().positive().integer(),
      price: Yup.number().required().positive().integer(),
      total: Yup.number().required().positive().integer(),
    },
  ],
  total: Yup.number().required().positive().integer().min(1),
});
