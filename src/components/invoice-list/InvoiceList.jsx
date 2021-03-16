import Invoice from '../invoice/Invoice';
import { InvoicesContainer } from '../../pages/Invoices/Invoices.styles';
import { useSelector } from 'react-redux';

function InvoiceList() {
  const invoices = useSelector((state) => state.invoices.invoices);
  return (
    <InvoicesContainer>
      {Object.values(invoices).map((invoice) => (
        <Invoice key={invoice.invoiceId} {...invoice} />
      ))}
    </InvoicesContainer>
  );
}

export default InvoiceList;
