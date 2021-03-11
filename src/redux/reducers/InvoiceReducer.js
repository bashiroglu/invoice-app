import { GET_ALL } from '../actionTypes';
import data from '../../data.json';

const initialState = { ...data };

const InvoiceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL:
      return { ...state };
    default:
      return state;
  }
};

export default InvoiceReducer;
