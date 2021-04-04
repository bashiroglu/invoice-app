import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';
import GoBack from '../../components/goBack/GoBack';
import InvoiceActions from '../../components/invoice/InvoiceActions/InvoiceActions';
import InvoiceItems from '../../components/invoice/InvoiceItems/InvoiceItems';
import Modal from '../../components/modal/Modal';
import { formatDate } from '../../helpers/formatDates';
import {
  AdressDetails,
  Container,
  DetailsText,
  DetailValues,
  FlexChild,
  FlexParent,
  GeneralInformation,
  GridContainer,
  PersonalInformationContainer,
  SentTo,
  StyledDates,
  StyledDetails,
  StyledId,
  StyledInvoiceSummaryTotal
} from './InvoiceDetails.style';
import { useSelector, useDispatch } from 'react-redux';
import { fetchInvoiceDetailsStartAsync } from '../../redux/invoice-details/invoice-details.actions';

const InvoiceDetails = () => {
  const dispatch = useDispatch();
  const { invoiceDetails } = useSelector((state) => state);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id } = useParams();

  useEffect(() => dispatch(fetchInvoiceDetailsStartAsync(id)), []);

  const cancelDeletion = () => {
    //
  };

  const deleteInvoice = () => {
    alert('deleted');
  };

  // useEffect(() => {
  //   document.title = `Invoice ${id} | ${
  //     invoiceDetails.invoiceDetails.status || 'pending'
  //   }`;
  // }, [id]);

  console.log(invoiceDetails.invoiceDetails.senderAddress);

  if (invoiceDetails.isFetching)
    return <Skeleton width={900} height={500} />;

  return (
    <>
      {modalIsOpen && (
        <Modal
          id={id}
          cancelDeletion={cancelDeletion}
          deleteInvoice={deleteInvoice}
          setModalIsOpen={setModalIsOpen}
        />
      )}
      <GoBack />
      <Container>
        <InvoiceActions
          status={invoiceDetails.invoiceDetails.status || <Skeleton />}
          setModalIsOpen={setModalIsOpen}
          id={id}
        />
        <StyledDetails>
          <PersonalInformationContainer>
            <GeneralInformation>
              <StyledId>
                {invoiceDetails.invoiceDetails.invoiceId || <Skeleton />}
              </StyledId>
              <DetailsText mb='3'>
                {invoiceDetails.invoiceDetails.description || <Skeleton />}
              </DetailsText>
            </GeneralInformation>
            <AdressDetails>
              <span>
                {invoiceDetails.invoiceDetails.senderAddress?.street}
              </span>
              <span>
                {invoiceDetails.invoiceDetails.senderAddress?.city}
              </span>
              <span>
                {invoiceDetails.invoiceDetails.senderAddress?.postCode}
              </span>
              <span>
                {invoiceDetails.invoiceDetails.senderAddress?.country}
              </span>
            </AdressDetails>
          </PersonalInformationContainer>
          <>
            <GridContainer>
              <FlexParent>
                <StyledDates>
                  <DetailsText mb='1'>Invoice Date</DetailsText>
                  <DetailValues>
                    {formatDate(
                      invoiceDetails.invoiceDetails.createdAt
                    ) || <Skeleton />}
                  </DetailValues>
                </StyledDates>
                <FlexChild>
                  <DetailsText mb='1'>Payment Due</DetailsText>
                  <DetailValues>
                    {formatDate(invoiceDetails.invoiceDetails.paymentDue)}
                  </DetailValues>
                </FlexChild>
              </FlexParent>
              <div>
                <DetailsText mb='1'>Bill To</DetailsText>
                <DetailValues mb='1'>
                  {invoiceDetails.invoiceDetails.clientName || (
                    <Skeleton />
                  )}
                </DetailValues>
                <DetailsText>
                  {invoiceDetails.invoiceDetails.clientAddress.street}
                </DetailsText>
                <DetailsText>
                  {invoiceDetails.invoiceDetails.clientAddress.city}
                </DetailsText>
                <DetailsText>
                  {invoiceDetails.invoiceDetails.clientAddress.postCode}
                </DetailsText>
                <DetailsText>
                  {invoiceDetails.invoiceDetails.clientAddress.country}
                </DetailsText>
              </div>
              <SentTo>
                <DetailsText mb='1'>Sent to</DetailsText>
                <DetailValues>
                  {invoiceDetails.invoiceDetails.clientEmail || (
                    <Skeleton />
                  )}
                </DetailValues>
              </SentTo>
            </GridContainer>
            {/* <InvoiceItems
              description={invoiceDetails.invoiceDetails.description}
              items={invoiceDetails.invoiceDetails.items}
            /> */}
            <StyledInvoiceSummaryTotal>
              <span>Grand Total</span>
              <span>
                £ {invoiceDetails.invoiceDetails.total || <Skeleton />}
              </span>
            </StyledInvoiceSummaryTotal>
          </>
        </StyledDetails>
      </Container>
    </>
  );
};

export default InvoiceDetails;
