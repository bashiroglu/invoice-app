import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import InvoiceList from '../../components/invoice/invoice-list/InvoiceList';
import InvoicesHeader from '../../components/invoice/invoices-header/InvoicesHeader';
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
