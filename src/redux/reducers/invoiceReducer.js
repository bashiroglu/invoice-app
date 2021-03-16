import { GET_ALL } from '../actionTypes';
import data from '../../data.json';

const invoiceData = { ...data };

// eslint-disable-next-line no-unused-vars
const invoiceReducer = (state = invoiceData, { type, payload }) => {
  switch (type) {
    case GET_ALL:
      return { ...state };
    default:
      return state;
  }
};

export default invoiceReducer;
