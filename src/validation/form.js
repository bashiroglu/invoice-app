import * as Yup from 'yup';

export default Yup.object().shape({
  senderAddress: Yup.object().shape({
    street: Yup.string().required(),
    city: Yup.string().required(),
    postCode: Yup.string().required(),
    country: Yup.string().required()
  }),
  clientName: Yup.string().required(),
  clientEmail: Yup.string().email().required(),
  clientAddress: Yup.object().shape({
    street: Yup.string().required(),
    city: Yup.string().required(),
    postCode: Yup.string().required(),
    country: Yup.string().required()
  }),
  paymentTerms: Yup.string().required(),
  description: Yup.string().required(),
  items: Yup.array()
    .of(
      Yup.object().shape({
        name: Yup.string().required(),
        quantity: Yup.number().required(),
        price: Yup.number().required()
      })
    )
    .required('must have at least one item')
    .min(1)
});
