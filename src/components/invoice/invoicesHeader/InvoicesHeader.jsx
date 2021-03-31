import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Heading } from '../../common/Heading';
import Filter from '../../filter/Filter';
import CreateButton from './CreateButton';
import { InfoBox, StyledInvoicesHeader } from './InvoicesHeader.styles';

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
      <Filter />
      <CreateButton onClick={() => push('/invoices/new')}>
        {width <= '1024' ? 'New' : 'New Invoice'}
      </CreateButton>
    </StyledInvoicesHeader>
  );
};

export default InvoicesHeader;
