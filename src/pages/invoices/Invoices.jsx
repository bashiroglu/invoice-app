import InvoiceList from '../../components/invoice-list/InvoiceList';
import InvoicesHeader from '../../components/invoices-header/InvoicesHeader';
import { fetchInvoicesStartAsync } from '../../redux/invoices/invoices.actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Invoices = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInvoicesStartAsync());
  }, []);

  return (
    <>
      <InvoicesHeader />
      <InvoiceList />
    </>
  );
};

export default Invoices;
