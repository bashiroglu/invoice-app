import { combineReducers } from 'redux';
import InvoiceDetailsReducer from '../invoiceDetails/invoiceDetails.reducer';
import invoiceReducer from '../invoices/invoices.reducer';

export default combineReducers({
  invoices: invoiceReducer,
  invoiceDetails: InvoiceDetailsReducer
});
