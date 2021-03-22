import Invoice from '../invoice/Invoice';
import { InvoiceWrapper } from './Invoices.styles';
import { useSelector } from 'react-redux';

function InvoiceList() {
  const invoices = useSelector((state) => state.invoices.invoices);
  return (
    <InvoiceWrapper>
      {Object.values(invoices).map((invoice) => (
        <Invoice key={invoice.invoiceId} {...invoice} />
      ))}
    </InvoiceWrapper>
  );
}

export default InvoiceList;
