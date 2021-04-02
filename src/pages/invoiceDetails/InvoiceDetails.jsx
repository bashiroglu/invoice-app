import moment from 'moment';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import GoBack from '../../components/goBack/GoBack';
import InvoiceActions from '../../components/invoice/InvoiceActions/InvoiceActions';
import InvoiceItems from '../../components/invoice/InvoiceItems/InvoiceItems';
import Modal from '../../components/modal/Modal';
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
import Skeleton from 'react-loading-skeleton';

const InvoiceDetails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id } = useParams();

  const { data, isLoading } = useQuery(
    ['invoiceDetails', id],
    async () => {
      const res = await fetch(
        `${process.env.REACT_APP_API_INVOICES}/${id}`
      );
      if (!res.ok) throw new Error('Something went wrong!');
      return res.json();
    }
  );

  if (isLoading) return <Skeleton />;

  const {
    description,
    invoiceId,
    status,
    createdAt,
    paymentDue,
    clientName,
    clientEmail,
    items,
    total
  } = data?.invoice;
  const {
    senderAddress: { street, city, postCode, country }
  } = data?.invoice;

  const cancelDeletion = () => {
    //
  };

  const deleteInvoice = () => {
    alert('deleted');
  };

  const formattedDate = (date) =>
    moment(new Date(date)).format('Do MMM YYYY');

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
          status={status || <Skeleton />}
          setModalIsOpen={setModalIsOpen}
          id={id}
        />
        <StyledDetails>
          <PersonalInformationContainer>
            <GeneralInformation>
              <StyledId>{invoiceId || <Skeleton />}</StyledId>
              <DetailsText mb='3'>
                {description || <Skeleton />}
              </DetailsText>
            </GeneralInformation>
            <AdressDetails>
              <span>{street || <Skeleton />}</span>
              <span>{city || <Skeleton />}</span>
              <span>{postCode || <Skeleton />}</span>
              <span>{country || <Skeleton />}</span>
            </AdressDetails>
          </PersonalInformationContainer>
          <>
            <GridContainer>
              <FlexParent>
                <StyledDates>
                  <DetailsText mb='1'>Invoice Date</DetailsText>
                  <DetailValues>
                    {formattedDate(createdAt) || <Skeleton />}
                  </DetailValues>
                </StyledDates>
                <FlexChild>
                  <DetailsText mb='1'>Payment Due</DetailsText>
                  <DetailValues>
                    {formattedDate(paymentDue) || <Skeleton />}
                  </DetailValues>
                </FlexChild>
              </FlexParent>
              <div>
                <DetailsText mb='1'>Bill To</DetailsText>
                <DetailValues mb='1'>
                  {clientName || <Skeleton />}
                </DetailValues>
                <DetailsText>{street || <Skeleton />}</DetailsText>
                <DetailsText>{city || <Skeleton />}</DetailsText>
                <DetailsText>{postCode || <Skeleton />}</DetailsText>
                <DetailsText>{country || <Skeleton />}</DetailsText>
              </div>
              <SentTo>
                <DetailsText mb='1'>Sent to</DetailsText>
                <DetailValues>{clientEmail || <Skeleton />}</DetailValues>
              </SentTo>
            </GridContainer>
            <InvoiceItems description={description} items={items} />
            <StyledInvoiceSummaryTotal>
              <span>Grand Total</span>
              <span>£ {total || <Skeleton />}</span>
            </StyledInvoiceSummaryTotal>
          </>
        </StyledDetails>
      </Container>
    </>
  );
};

export default InvoiceDetails;
