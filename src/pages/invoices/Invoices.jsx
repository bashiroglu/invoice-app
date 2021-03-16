import InvoiceDrawer from '../../components/invoiceDrawer/InvoiceDrawer';
import InvoiceList from '../../components/invoice-list/InvoiceList';
import { InvoicesContainer } from './Invoices.styles';
import InvoicesHeader from '../../components/invoices-header/InvoicesHeader';
import { useRouteMatch } from 'react-router-dom';

const Invoices = () => {
  const match = useRouteMatch('/invoices/new');

  const body = (
    <InvoicesContainer>
      <InvoicesHeader />
      <InvoiceList />
    </InvoicesContainer>
  );

  if (match)
    return (
      <>
        <InvoiceDrawer />
        {body}
      </>
    );

  return body;
};

export default Invoices;
