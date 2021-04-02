import Skeleton from 'react-loading-skeleton';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Heading, Text } from '../../common';
import NoInvoicesSvg from '../../svgs/NoInvoices.svg';
import Invoice from '../Invoice';
import {
  InvoiceWrapper,
  NoInvoiceWrapper,
  SkeletonWrapper,
  StyledHeader
} from './Invoices.styles';

function InvoiceList({ data, isError, isLoading }) {
  const { width } = useWindowDimensions();

  if (isLoading)
    return (
      <SkeletonWrapper>
        <Skeleton
          style={{
            display: 'block',
            marginBottom: '1.6rem'
          }}
          height={90}
          width={width < 1440 ? '90vw' : 770}
          count={6}
        />
      </SkeletonWrapper>
    );

  if (data?.invoices)
    return (
      <InvoiceWrapper>
        {Object.values(data.invoices).map((invoice) => (
          <Invoice key={invoice.invoiceId} {...invoice} />
        ))}
      </InvoiceWrapper>
    );

  if (!data)
    return (
      <NoInvoiceWrapper>
        <NoInvoicesSvg />
        <StyledHeader>
          <Heading width='100%' fontSize='2' mt='8' mb='2.5'>
            There is nothing here
          </Heading>
          <Text noCap width='22' size='12'>
            Create an invoice by clicking the
            <strong> New Invoice </strong>
            button and get started
          </Text>
        </StyledHeader>
      </NoInvoiceWrapper>
    );

  if (isError)
    return <h2>Something went wrong. Please try again in few minutes</h2>;
}

export default InvoiceList;
