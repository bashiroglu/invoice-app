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
  invoiceDate: '',
  paymentTerms: '',
  description: '',
  status: 'draft',
  items: [
    {
      name: '',
      quantity: '',
      price: ''
    }
  ]
};

export default initialValues;
