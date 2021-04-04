import {
  ProjectDescription,
  Quantity,
  StyledInvoiceItemsPrice,
  StyledInvoiceItemsWrapper
} from '../../../pages/invoiceDetails/InvoiceDetails.style';

const InvoiceItems = ({ items, description }) => {
  return (
    <StyledInvoiceItemsWrapper>
      <div>
        {items.map((item, i) => (
          <div key={i}>
            <div>
              <ProjectDescription>{description}</ProjectDescription>
              <Quantity>
                {`${item.quantity} x £`} {item.price}
              </Quantity>
            </div>
            <StyledInvoiceItemsPrice>£ 156.00</StyledInvoiceItemsPrice>
          </div>
        ))}
      </div>
    </StyledInvoiceItemsWrapper>
  );
};

export default InvoiceItems;
