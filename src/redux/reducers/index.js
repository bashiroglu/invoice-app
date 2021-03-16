import { combineReducers } from 'redux';
import invoiceReducer from '../invoices/invoices.reducer';

export default combineReducers({
  invoices: invoiceReducer,
});
