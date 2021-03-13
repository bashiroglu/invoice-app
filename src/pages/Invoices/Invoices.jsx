import InvoiceList from '../../components/invoice-list/InvoiceList';
import { InvoicesContainer } from './Invoices.styles';
import InvoicesHeader from '../../components/invoices-header/InvoicesHeader';

const Invoices = () => (
  <InvoicesContainer>
    <InvoicesHeader />
    <InvoiceList />
  </InvoicesContainer>
);

export default Invoices;
