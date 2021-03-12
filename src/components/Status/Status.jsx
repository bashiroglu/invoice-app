import { Container, Text } from './Status.styles';

const Status = ({ status }) => {
  const stateColors = {
    paid: '51,214,159',
    pending: '255,143,0',
    draft: '55,59,83',
  };

  return (
    <Container state={stateColors[status]}>
      <Text state={stateColors[status]}>{status}</Text>
    </Container>
  );
};

export default Status;
