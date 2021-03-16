import React from 'react';
import InvoiceList from '../../components/invoice-list/InvoiceList';
import { InvoicesContainer } from './Invoices.styles';
import InvoicesHeader from '../../components/invoices-header/InvoicesHeader';
import { useDispatch } from 'react-redux';
import { fetchInvoicesStartAsync } from '../../redux/invoices/invoices.actions';

const Invoices = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchInvoicesStartAsync());
  }, []);

  return (
    <InvoicesContainer>
      <InvoicesHeader />
      <InvoiceList />
    </InvoicesContainer>
  );
};

export default Invoices;
