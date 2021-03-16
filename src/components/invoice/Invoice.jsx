import {
  IconButton,
  InvoiceContainer,
  InvoiceDate,
  InvoicePersonAmount,
  InvoicePersonName,
  RightSideContainer,
} from './Invoice.styles';

import RightArrow from '../svgs/RightArrow';
import Status from '../Status/Status';
import Tag from '../Tag/Tag';
import formatNumbers from '../../helpers/formatNumbers';
import { useHistory } from 'react-router-dom';

const Invoice = ({
  _id,
  invoiceId,
  createdAt,
  clientName,
  total,
  status,
  currency = '£',
}) => {
  const formattedTotal = formatNumbers(total);
  const history = useHistory();

  return (
    <InvoiceContainer onClick={() => history.push(`invoice/${_id}`)}>
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
