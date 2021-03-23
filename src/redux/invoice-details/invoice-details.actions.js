import axios from 'axios';
import InvoiceDetailsActionTypes from './invoice-details.types';

export const fetchInvoiceDetailsStart = () => ({
  type: InvoiceDetailsActionTypes.FETCH_INVOICES_DETAILS_START,
});

export const fetchInvoiceDetailsSuccess = (invoiceDetails) => {
  console.log('invoiceDetails', invoiceDetails);
  return {
    type: InvoiceDetailsActionTypes.FETCH_INVOICES_DETAILS_SUCCESS,
    payload: invoiceDetails,
  };
};

export const fetchInvoiceDetailsFailure = (errorMessage) => ({
  type: InvoiceDetailsActionTypes.FETCH_INVOICES_DETAILS_FAILURE,
  payload: errorMessage,
});

export const fetchInvoiceDetailsStartAsync = (invoiceId) => {
  return async (dispatch) => {
    dispatch(fetchInvoiceDetailsStart());
    let response;
    try {
      response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/invoices/${invoiceId}`,
      );
      console.log(response.data.invoice);

      dispatch(fetchInvoiceDetailsSuccess(response.data.invoice));
    } catch (error) {
      console.log(error);
      dispatch(fetchInvoiceDetailsFailure(response.data.error));
    }
  };
};
