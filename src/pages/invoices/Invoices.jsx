import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import InvoiceList from '../../components/invoice/invoiceList/InvoiceList';
import InvoicesHeader from '../../components/invoice/invoicesHeader/InvoicesHeader';
import { fetchInvoicesStartAsync } from '../../redux/invoices/invoices.actions';

const Invoices = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchInvoicesStartAsync());
  // }, []);

  return (
    <>
      <InvoicesHeader />
      <InvoiceList />
    </>
  );
};

export default Invoices;
