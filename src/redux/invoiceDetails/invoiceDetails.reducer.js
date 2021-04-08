import InvoiceDetailsActionTypes from './invoiceDetails.types';

const initialState = {
  invoiceDetails: {},
  isFetching: false,
  errorMessage: {}
};
const InvoiceDetailsReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case InvoiceDetailsActionTypes.FETCH_INVOICES_DETAILS_START:
      return { ...state, isFetching: true };
    case InvoiceDetailsActionTypes.FETCH_INVOICES_DETAILS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      };
    case InvoiceDetailsActionTypes.FETCH_INVOICES_DETAILS_SUCCESS:
      return { ...state, isFetching: false, invoiceDetails: payload };
    case InvoiceDetailsActionTypes.MARK_INVOICE_AS_PAID:
      return { ...state };
    default:
      return state;
  }
};

export default InvoiceDetailsReducer;
