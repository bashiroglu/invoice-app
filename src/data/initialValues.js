const initialValues = {
  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: ''
  },
  clientName: '',
  clientEmail: '',
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: ''
  },
  createdAt: new Date(),
  invoiceDate: '',
  paymentTerms: '',
  description: '',
  items: [
    {
      name: '',
      quantity: '',
      price: ''
    }
  ]
};

export default initialValues;
