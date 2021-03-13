import { Container } from './Status.styles';

const Status = ({ status, mr }) => {
  const stateColors = {
    paid: '51, 214, 159',
    pending: '255, 143, 0',
    draft: '55, 59, 83',
  };

  // TODO: draft text color on dark mode

  return (
    <Container mr={mr} color={stateColors[status]}>
      <span>{status}</span>
    </Container>
  );
};

export default Status;
