import Invoice from '../invoice/Invoice';
import { InvoicesContainer } from '../../pages/invoices/Invoices.styles';
import { useSelector } from 'react-redux';

function InvoiceList() {
  const invoices = useSelector((state) => state.invoices);

  return (
    <InvoicesContainer>
      {Object.values(invoices).map((invoice) => (
        <Invoice key={invoice.id} {...invoice} />
      ))}
    </InvoicesContainer>
  );
}

export default InvoiceList;
