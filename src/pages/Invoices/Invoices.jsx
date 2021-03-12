import React from 'react';
import InvoiceList from '../../components/invoice-list/InvoiceList';
import InvoicesHeader from '../../components/invoices-header/InvoicesHeader';
import { InvoicesContainer } from './Invoices.styles';

function Invoices() {
  return (
    <InvoicesContainer>
      <InvoicesHeader />
      <InvoiceList />
    </InvoicesContainer>
  );
}

export default Invoices;
