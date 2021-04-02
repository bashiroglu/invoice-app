import { useHistory } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Heading } from '../../common/Heading';
import Filter from '../../filter/Filter';
import Skeleton from 'react-loading-skeleton';
import CreateButton from './CreateButton';
import { InfoBox, StyledInvoicesHeader } from './InvoicesHeader.styles';

const InvoicesHeader = ({ numberOfInvoices }) => {
  const { width } = useWindowDimensions();
  const { push } = useHistory();

  const numOfInvoices =
    width <= '1024' ? (
      <span>{numberOfInvoices} invoices</span>
    ) : (
      <>
        There are <span>{numberOfInvoices}</span> total invoices
      </>
    );

  return (
    <StyledInvoicesHeader>
      <InfoBox>
        <Heading invoice mb='0.8'>
          Invoices
        </Heading>
        <p>
          {numberOfInvoices ? (
            numOfInvoices
          ) : (
            <Skeleton width={160} height={15} />
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
