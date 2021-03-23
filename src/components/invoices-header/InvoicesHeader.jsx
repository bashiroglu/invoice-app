import {
  Filter,
  InfoBox,
  StyledInvoicesHeader,
} from './InvoicesHeader.styles';

import CreateButton from './CreateButton';
import { Heading } from '../common';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const InvoicesHeader = () => {
  const invoices = useSelector((state) => state.invoices.invoices);
  const numberOfInvoices = Object.keys(invoices).length;
  const { width } = useWindowDimensions();

  const { push } = useHistory();

  return (
    <StyledInvoicesHeader>
      <InfoBox>
        <Heading invoice mb='0.8'>
          Invoices
        </Heading>
        <p className='ppp'>
          {width <= '1024' ? (
            <span>{numberOfInvoices} invoices</span>
          ) : (
            <>
              There are <span>{numberOfInvoices}</span> total invoices
            </>
          )}
        </p>
      </InfoBox>
      <Filter>{width <= '1024' ? 'Filter' : 'Filter by status'}</Filter>
      <CreateButton onClick={() => push('/invoices/new')}>
        {width <= '1024' ? 'New' : 'New Invoice'}
      </CreateButton>
    </StyledInvoicesHeader>
  );
};

export default InvoicesHeader;
