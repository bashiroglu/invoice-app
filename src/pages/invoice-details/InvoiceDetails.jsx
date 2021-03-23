import {
  Container,
  Flex,
  StyledActions,
  StyledDetails,
  Text,
  PersonalInformationContainer,
  StyledId,
  Profession,
  GeneralInformation,
  AdressDetails,
  InvoiceSummary,
  InvoiceSummaryTotal,
} from './InvoiceDetails.style';
import { useHistory, useParams } from 'react-router-dom';

import { Button } from '../../components/common';
import Modal from '../../components/modal/Modal';
import Status from '../../components/status/Status';
import Tag from '../../components/tag/Tag';
import { useState, useEffect } from 'react';
import { fetchInvoiceDetailsStartAsync } from '../../redux/invoice-details/invoice-details.actions';
import { useDispatch, useSelector } from 'react-redux';

const InvoiceDetails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state) => state.invoiceDetails.isFetching,
  );
  const invoiceDetails = useSelector(
    (state) => state.invoiceDetails.invoiceDetails,
  );

  // useEffect(() => {
  //   dispatch(fetchInvoiceDetailsStartAsync(invoiceId));
  // }, []);

  const {
    description,
    senderAddress: { street, city, postCode, country },
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
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '106 Kendell Street',
      city: 'Sharrington',
      postCode: 'NR24 5WQ',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Brand Guidelines',
        quantity: 1,
        price: 1800.9,
        total: 1800.9,
      },
    ],
    total: 1800.9,
  };

  const { push } = useHistory();

  const cancelDeletion = () => {
    console.log('canceled');
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
      <Container>
        <StyledActions>
          <Flex>
            <Text>Status</Text>
            <Status status={'pending'}>{'Paid'}</Status>
          </Flex>
          <Button third onClick={() => push(`/invoices/edit/${id}`)}>
            Edit
          </Button>
          <Button
            fifth
            onClick={() => setModalIsOpen((prevState) => !prevState)}
          >
            Delete
          </Button>
          <Button second>Mark as Paid</Button>
        </StyledActions>

        <StyledDetails>
          <PersonalInformationContainer>
            <GeneralInformation>
              <StyledId>{id}</StyledId>
              <Profession>{description}</Profession>
            </GeneralInformation>
            <AdressDetails>
              <span>{street}</span>
              <span>{city}</span>
              <span>{postCode}</span>
              <span>{country}</span>
            </AdressDetails>
          </PersonalInformationContainer>
          <InvoiceSummary>
            <InvoiceSummaryTotal></InvoiceSummaryTotal>
          </InvoiceSummary>
        </StyledDetails>
      </Container>
    </>
  );
};

export default InvoiceDetails;
