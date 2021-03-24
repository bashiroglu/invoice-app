import { v4 as uuid } from 'uuid';
import icon from '../../../assets/trash-icon.svg';
import {
  Flex,
  Icon,
  IconContainer,
  ItemInputs,
  Sum,
} from '../Form.styles';

const FormItemListInputs = (props) => {
  return [...Array(2)].map(() => (
    <FormItemListInput {...props} key={uuid()} />
  ));
};

const FormItemListInput = ({ total = 0 }) => {
  return (
    <Flex mb='1.8'>
      <ItemInputs mr='1.5' type='text' name='itemName' width='20' />
      <ItemInputs mr='1.5' type='text' name='qty' qty width='5' min='0' />
      <ItemInputs mr='1.5' type='text' name='price' width='10' />
      <Sum>{total}</Sum>
      <IconContainer ml='4'>
        <Icon src={icon} alt='trash icon' />
      </IconContainer>
    </Flex>
  );
};

export default FormItemListInputs;
