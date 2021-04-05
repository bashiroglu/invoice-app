import Skeleton from 'react-loading-skeleton';
import { StyledInvoiceSummaryTotal } from './InvoiceDetailsSummaryTotal.style';

const InvoiceDetailsSummaryTotal = ({ invoiceDetails }) => (
  <StyledInvoiceSummaryTotal>
    <span>Grand Total</span>
    <span>£ {invoiceDetails.invoiceDetails.total || <Skeleton />}</span>
  </StyledInvoiceSummaryTotal>
);

export default InvoiceDetailsSummaryTotal;
