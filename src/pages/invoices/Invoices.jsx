import { useQuery } from 'react-query';
import { fetchInvoices } from '../../api';
import InvoiceList from '../../components/invoice/invoiceList/InvoiceList';
import InvoicesHeader from '../../components/invoice/invoicesHeader/InvoicesHeader';

const Invoices = () => {
  const { data, isError, isLoading } = useQuery('invoices', fetchInvoices);

  return (
    <>
      <InvoicesHeader numberOfInvoices={data?.invoices?.length} />
      <InvoiceList data={data} isError={isError} isLoading={isLoading} />
    </>
  );
};

export default Invoices;
