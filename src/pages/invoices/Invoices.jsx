import InvoiceList from '../../components/invoice-list/InvoiceList';
import { InvoicesContainer } from './Invoices.styles';
import InvoicesHeader from '../../components/invoices-header/InvoicesHeader';
import { fetchInvoicesStartAsync } from '../../redux/invoices/invoices.actions';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Invoices = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInvoicesStartAsync());
  }, []);

  const body = (
    <InvoicesContainer>
      <InvoicesHeader />
      <InvoiceList />
    </InvoicesContainer>
  );

  return body;
};

export default Invoices;
