import { combineReducers } from 'redux';
import InvoiceDetailsReducer from '../invoice-details/invoice-details.reducer';
import invoiceReducer from '../invoices/invoices.reducer';

export default combineReducers({
  invoices: invoiceReducer,
  invoiceDetails: InvoiceDetailsReducer,
});
