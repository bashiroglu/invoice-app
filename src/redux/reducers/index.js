import { combineReducers } from 'redux';
import invoiceReducer from './InvoiceReducer';

export default combineReducers({
  invoices: invoiceReducer,
});
