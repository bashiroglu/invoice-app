import axios from 'axios';
import InvoicesActionTypes from './invoices.types';

export const fetchInvoicesStart = () => ({
  type: InvoicesActionTypes.FETCH_INVOICES_START
});

export const fetchInvoicesSuccess = (invoices) => ({
  type: InvoicesActionTypes.FETCH_INVOICES_SUCCESS,
  payload: invoices
});

export const fetchInvoicesFailure = (errorMessage) => ({
  type: InvoicesActionTypes.FETCH_INVOICES_FAILURE,
  payload: errorMessage
});

export const fetchAllInvoices = () => async (dispatch) => {
  dispatch(fetchInvoicesStart());
  let response;
  try {
    response = await axios.get(process.env.REACT_APP_API_INVOICES);
  } catch (error) {
    console.log(error);
  }
  dispatch(fetchInvoicesSuccess(response.data.invoices));
};

export const submitInvoice = (body) => async (dispatch) => {
  try {
    const res = await axios.post(process.env.REACT_APP_API_INVOICES, body);
    dispatch({
      type: InvoicesActionTypes.SUBMIT_NEW_INVOICE,
      payload: JSON.stringify(res.data.invoice)
    });
  } catch (err) {
    console.log(err);
  }
};
