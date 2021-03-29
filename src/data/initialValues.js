import moment from 'moment';

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
  createdAt: moment().format('Do MMM YYYY, HH:mm'),
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
