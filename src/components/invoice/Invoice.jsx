import {
  IconButton,
  InvoiceContainer,
  InvoiceDate,
  InvoicePersonAmount,
  InvoicePersonName,
  RightSideContainer,
} from './Invoice.styles';

import RightArrow from '../svgs/RightArrow';
import Status from '../status/Status';
import Tag from '../tag/Tag';
import formatNumbers from '../../helpers/formatNumbers';

const Invoice = ({
  invoiceId,
  createdAt,
  clientName,
  total,
  status,
  currency = '£',
}) => {
  const formattedTotal = formatNumbers(total);

  return (
    <InvoiceContainer to={`/invoices/all/${invoiceId}`}>
      <Tag small>{invoiceId}</Tag>
      <InvoiceDate>{createdAt}</InvoiceDate>
      <InvoicePersonName>{clientName}</InvoicePersonName>
      <InvoicePersonAmount>
        {currency} {formattedTotal}
      </InvoicePersonAmount>
      <RightSideContainer>
        <Status status={status} />
        <IconButton>
          <RightArrow />
        </IconButton>
      </RightSideContainer>
    </InvoiceContainer>
  );
};

export default Invoice;
