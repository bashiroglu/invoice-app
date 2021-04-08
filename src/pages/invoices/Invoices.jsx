import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InvoiceList from '../../components/invoice/invoiceList/InvoiceList';
import InvoicesHeader from '../../components/invoice/invoicesHeader/InvoicesHeader';
import { fetchAllInvoices } from '../../redux/invoices/invoices.actions';

const Invoices = () => {
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices);

  useEffect(() => dispatch(fetchAllInvoices()), []);

  return (
    <>
      <InvoicesHeader {...invoices} />
      <InvoiceList {...invoices} />
    </>
  );
};

export default Invoices;
