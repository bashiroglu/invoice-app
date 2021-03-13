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

const Invoice = ({ id, createdAt, clientName, total, status }) => {
  const formattedTotal = formatNumbers(total);

  return (
    <InvoiceContainer>
      <Tag small>{id}</Tag>
      <InvoiceDate>{createdAt}</InvoiceDate>
      <InvoicePersonName>{clientName}</InvoicePersonName>
      <InvoicePersonAmount>£ {formattedTotal}</InvoicePersonAmount>
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
