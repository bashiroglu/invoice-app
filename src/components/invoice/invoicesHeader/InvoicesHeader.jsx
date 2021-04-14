import Skeleton from 'react-loading-skeleton';
import { useHistory } from 'react-router-dom';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Heading } from '../../common/Heading';
import Filter from '../../filter/Filter';
import CreateButton from './CreateButton';
import { InfoBox, StyledInvoicesHeader } from './InvoicesHeader.styles';

const InvoicesHeader = ({ invoices }) => {
  const invoicesLen = invoices.length;
  const { width } = useWindowDimensions();
  const { push } = useHistory();

  const skeletonStyles = {
    display: 'inline-block',
    width: '10px',
    height: '10px'
  };

  const numberOfInvoices =
    width <= '1024' ? (
      <span>{invoicesLen} invoices</span>
    ) : (
      <>
        There are{' '}
        <span>{invoicesLen || <Skeleton style={skeletonStyles} />}</span>{' '}
        total invoices
      </>
    );

  return (
    <StyledInvoicesHeader>
      <InfoBox>
        <Heading invoice mb='0.8'>
          Invoices
        </Heading>
        <p>{numberOfInvoices}</p>
      </InfoBox>
      <Filter />
      <CreateButton onClick={() => push('/invoices/new')}>
        {width <= '1024' ? 'New' : 'New Invoice'}
      </CreateButton>
    </StyledInvoicesHeader>
  );
};

export default InvoicesHeader;
