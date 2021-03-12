import React from 'react';
import { InvoicesContainer } from '../../pages/Invoices/Invoices.styles';
import Invoice from '../invoice/Invoice';

function InvoiceList() {
  const invoicesDummy = [
    {
      code: 'RT3080',
      date: 'Due  19 Aug 2021',
      personName: 'Jensen Huang',
      amount: '£ 1,800.90',
      status: 'paid',
    },
    {
      code: 'XM9141',
      date: 'Due  19 Aug 2021',
      personName: 'Alex Grim',
      amount: '£ 556.00',
      status: 'pending',
    },
  ];
  return (
    <InvoicesContainer>
      {invoicesDummy.map((invoice, i) => {
        return <Invoice key={i} {...invoice} />;
      })}
    </InvoicesContainer>
  );
}

export default InvoiceList;
