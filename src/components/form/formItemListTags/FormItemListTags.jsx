import { Text } from '../../common';
import { Flex } from '../Form.styles';

const FormItemListTags = () => {
  return (
    <Flex>
      <Text mr='1.5' width='20'>
        Item Name
      </Text>
      <Text mr='1.5' width='5'>
        Qty
      </Text>
      <Text mr='1.5' width='10'>
        Price
      </Text>
      <Text mr='1.5' width='10'>
        Total
      </Text>
    </Flex>
  );
};

export default FormItemListTags;
