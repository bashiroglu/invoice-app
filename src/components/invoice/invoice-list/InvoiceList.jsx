import { useSelector } from 'react-redux';
import Invoice from '../Invoice';
import { InvoiceWrapper } from './Invoices.styles';

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
