import React from 'react';
import RightArrow from '../svgs/RightArrow';
import {
  InvoiceCode,
  InvoiceContainer,
  InvoiceDate,
  InvoicePersonName,
  InvoicePersonAmount,
  RightSideContainer,
  IconButton,
  StatusContainer,
} from './Invoice.styles';

function Invoice({ code, date, personName, amount, status }) {
  return (
    <InvoiceContainer>
      <InvoiceCode>
        <span>#</span>
        {code}
      </InvoiceCode>
      <InvoiceDate>{date}</InvoiceDate>
      <InvoicePersonName>{personName}</InvoicePersonName>
      <InvoicePersonAmount>{amount}</InvoicePersonAmount>
      <RightSideContainer>
        <StatusContainer status={status}>
          <span>{status[0].toUpperCase() + status.slice(1)}</span>
        </StatusContainer>
        <IconButton>
          <RightArrow />
        </IconButton>
      </RightSideContainer>
    </InvoiceContainer>
  );
}

export default Invoice;
