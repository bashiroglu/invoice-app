import {
  Filter,
  InfoBox,
  StyledInvoicesHeader,
} from './InvoicesHeader.styles';

import CreateButton from './CreateButton';
import { Heading } from '../common';
import { useSelector } from 'react-redux';

const InvoicesHeader = () => {
  const invoices = useSelector((state) => state.invoices);
  const numberOfInvoices = Object.keys(invoices).length;

  return (
    <StyledInvoicesHeader>
      <InfoBox>
        <Heading invoice mb='0.8'>
          Invoices
        </Heading>
        <p>
          There are <span>{numberOfInvoices}</span> total invoices
        </p>
      </InfoBox>
      <Filter>Filter by status</Filter>
      <CreateButton>New Invoice</CreateButton>
    </StyledInvoicesHeader>
  );
};

export default InvoicesHeader;
