import axios from 'axios';
import InvoicesActionTypes from './invoices.types';

export const fetchInvoicesStart = () => ({
  type: InvoicesActionTypes.FETCH_INVOICES_START,
});

export const fetchInvoicesSuccess = (invoices) => ({
  type: InvoicesActionTypes.FETCH_INVOICES_SUCCESS,
  payload: invoices,
});

export const fetchInvoicesFailure = (errorMessage) => ({
  type: InvoicesActionTypes.FETCH_INVOICES_FAILURE,
  payload: errorMessage,
});

export const fetchInvoicesStartAsync = () => {
  return async (dispatch) => {
    dispatch(fetchInvoicesStart());
    let response;
    try {
      response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/invoices`,
      );
    } catch (error) {
      console.log(error);
    }
    dispatch(fetchInvoicesSuccess(response.data.invoices));
  };
};
