import { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router';
import ScrollLock from 'react-scrolllock';
import animationReducer from '../../../helpers/animationReducer';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { Heading } from '../../common';
import Form from '../../form/Form';
import Tag from '../../tag/Tag';
import { Container, Wrapper } from './InvoiceDrawer.styles';

const InvoiceDrawer = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, setFormData] = useState({});
  const { width } = useWindowDimensions();
  const { id } = useParams();

  const onFormSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const onFormChange = (e) => {
    setFormData((oldState) => ({
      ...oldState,
      [e.target.name]: e.target.value,
    }));
  };

  const [{ state }, dispatch] = useReducer(animationReducer, {});

  useEffect(() => {
    if (width >= '1440' && !width < 1440) dispatch({ type: 'desktop' });
    if (width >= '768' && !width < 375 && width < 1440)
      dispatch({ type: 'tablet' });
    if (width >= '375' && width < 768) dispatch({ type: 'mobile' });
  }, [width]);

  return (
    <ScrollLock>
      <Wrapper>
        <Container
          initial='initial'
          animate='animate'
          exit='exit'
          variants={state}
        >
          <Heading mb='3'>
            {id ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                Edit <Tag>{id}</Tag>
              </div>
            ) : (
              'New Invoice'
            )}
          </Heading>
          <Form
            id={id}
            onFormSubmit={onFormSubmit}
            onFormChange={onFormChange}
          />
        </Container>
      </Wrapper>
    </ScrollLock>
  );
};

export default InvoiceDrawer;
