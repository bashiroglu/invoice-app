import moment from 'moment';
import formatNumbers from '../../helpers/formatNumbers';
import Status from '../status/Status';
import RightArrow from '../svgs/RightArrow';
import Tag from '../tag/Tag';
import {
  IconButton,
  InvoiceContainer,
  InvoiceDate,
  InvoicePersonAmount,
  InvoicePersonName,
  RightSideContainer,
  TagWrapper
} from './Invoice.styles';

const Invoice = ({
  invoiceId,
  createdAt,
  clientName,
  total,
  status,
  currency = '£'
}) => {
  console.log(createdAt);
  const formattedTotal = formatNumbers(total);
  const formattedCreatedAt = moment(new Date(createdAt)).format(
    'Do MMM YYYY'
  );

  return (
    <InvoiceContainer to={`/invoices/all/${invoiceId}`}>
      <TagWrapper>
        <Tag small>{invoiceId}</Tag>
      </TagWrapper>
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
