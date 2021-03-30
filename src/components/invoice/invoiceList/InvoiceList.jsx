// import { useSelector } from 'react-redux';
import Invoice from '../Invoice';
import { InvoiceWrapper } from './Invoices.styles';
import invoices from '../../../data/data.json';

function InvoiceList() {
  const data = { ...invoices };
  // const invoices = useSelector((state) => state.invoices.invoices);

  return (
    <InvoiceWrapper>
      {Object.values(data).map((invoice) => (
        <Invoice key={invoice.id} {...invoice} />
      ))}
    </InvoiceWrapper>
  );
}

export default InvoiceList;
