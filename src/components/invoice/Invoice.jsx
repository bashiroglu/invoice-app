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
import moment from 'moment';

const Invoice = ({
  invoiceId,
  createdAt,
  clientName,
  total,
  status,
  currency = '£',
}) => {
  const formattedTotal = formatNumbers(total);
  const formattedCreatedAt = moment(createdAt).format('Do MMM YYYY');

  return (
    <InvoiceContainer to={`/invoices/all/${invoiceId}`}>
      <Tag small>{invoiceId}</Tag>
      <InvoiceDate>Due {formattedCreatedAt}</InvoiceDate>
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
