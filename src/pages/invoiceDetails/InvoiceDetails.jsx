import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Text } from '../../components/common';
import Modal from '../../components/modal/Modal';
import Status from '../../components/status/Status';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import {
  AdressDetails,
  Container,
  DetailsText,
  DetailValues,
  Flex,
  FlexChild,
  FlexParent,
  GeneralInformation,
  GridContainer,
  PersonalInformationContainer,
  ProjectDescription,
  Quantity,
  SentTo,
  StyledActions,
  StyledDates,
  StyledDetails,
  StyledId,
  StyledInvoiceItemsPrice,
  StyledInvoiceItemsWrapper,
  StyledInvoiceSummaryTotal
} from './InvoiceDetails.style';
import GoBack from '../../components/goBack/GoBack';

/**
 * todo: refactor vars
 * invoice summary comp
 * separate top and bottom
 * map items
 */

const InvoiceDetails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id } = useParams();
  const { width } = useWindowDimensions();
  const { push } = useHistory();

  // const dispatch = useDispatch();
  // const isFetching = useSelector(
  //   (state) => state.invoiceDetails.isFetching
  // );
  // const invoiceDetails = useSelector(
  //   (state) => state.invoiceDetails.invoiceDetails
  // );

  // useEffect(() => {
  //   dispatch(fetchInvoiceDetailsStartAsync(invoiceId));
  // }, []);

  const {
    description,
    senderAddress: { street, city, postCode, country }
  } = {
    id: 'RT3080',
    createdAt: '2021-08-18',
    paymentDue: '2021-08-19',
    description: 'Re-branding',
    paymentTerms: 1,
    clientName: 'Jensen Huang',
    clientEmail: 'jensenh@mail.com',
    status: 'paid',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom'
    },
    clientAddress: {
      street: '106 Kendell Street',
      city: 'Sharrington',
      postCode: 'NR24 5WQ',
      country: 'United Kingdom'
    },
    items: [
      {
        name: 'Brand Guidelines',
        quantity: 1,
        price: 1800.9,
        total: 1800.9
      }
    ],
    total: 1800.9
  };

  const cancelDeletion = () => {
    //
  };

  const deleteInvoice = () => {
    alert('deleted');
  };

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
        <StyledActions>
          {width < 768 ? (
            <Flex>
              <Text>Status</Text>
              <Status status={'pending'}>{'Paid'}</Status>
            </Flex>
          ) : (
            <>
              <Flex>
                <Text>Status</Text>
                <Status status={'pending'}>{'Paid'}</Status>
              </Flex>
              <Button third onClick={() => push(`/invoices/edit/${id}`)}>
                Edit
              </Button>
              <Button fifth onClick={() => setModalIsOpen((s) => !s)}>
                Delete
              </Button>
              <Button second>Mark as Paid</Button>
            </>
          )}
        </StyledActions>
        <StyledDetails>
          <PersonalInformationContainer>
            <GeneralInformation>
              <StyledId>#XM9141</StyledId>
              <DetailsText mb='3'>Graphic Design</DetailsText>
            </GeneralInformation>
            <AdressDetails>
              <span>{street}</span>
              <span>{city}</span>
              <span>{postCode}</span>
              <span>{country}</span>
            </AdressDetails>
          </PersonalInformationContainer>
          <>
            <GridContainer>
              <FlexParent>
                <StyledDates>
                  <DetailsText mb='1'>Invoice Date</DetailsText>
                  <DetailValues>21 Aug 2021</DetailValues>
                </StyledDates>
                <FlexChild>
                  <DetailsText mb='1'>Payment Due</DetailsText>
                  <DetailValues>20 Sep 2021</DetailValues>
                </FlexChild>
              </FlexParent>
              <div>
                <DetailsText mb='1'>Bill To</DetailsText>
                <DetailValues mb='1'>Alex Grim</DetailValues>
                <DetailsText>{street}</DetailsText>
                <DetailsText>{city}</DetailsText>
                <DetailsText>{postCode}</DetailsText>
                <DetailsText>{country}</DetailsText>
              </div>
              <SentTo>
                <DetailsText mb='1'>Sent to</DetailsText>
                <DetailValues>alexgrim@mail.com</DetailValues>
              </SentTo>
            </GridContainer>
            <StyledInvoiceItemsWrapper>
              <div>
                <ProjectDescription>Banner Design</ProjectDescription>
                <Quantity>1 x £ 156.00</Quantity>
              </div>
              <StyledInvoiceItemsPrice>£ 156.00</StyledInvoiceItemsPrice>
            </StyledInvoiceItemsWrapper>
            <StyledInvoiceSummaryTotal>
              <span>Grand Total</span>
              <span>£ 556.00</span>
            </StyledInvoiceSummaryTotal>
          </>
        </StyledDetails>
      </Container>
    </>
  );
};

export default InvoiceDetails;
