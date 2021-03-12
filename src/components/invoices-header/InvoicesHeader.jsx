import React from 'react';
import CreateButton from './CreateButton';
import {
  InfoBox,
  StyledInvoicesHeader,
  Filter,
} from './InvoicesHeader.styles';

function InvoicesHeader() {
  return (
    <StyledInvoicesHeader>
      <InfoBox>
        <h1>Invoices</h1>
        <p>
          There are <span>7</span> total invoices
        </p>
      </InfoBox>
      <Filter>Filter by status</Filter>
      <CreateButton>New Invoice</CreateButton>
    </StyledInvoicesHeader>
  );
}

export default InvoicesHeader;
