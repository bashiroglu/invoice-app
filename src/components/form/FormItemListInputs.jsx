import { Field, FieldArray } from 'formik';
import icon from '../../assets/trash-icon.svg';
import { Button } from '../common';
import { Flex, Icon, IconContainer, ItemInputs, Sum } from './Form.styles';

const FormItemListInputs = ({ values, handleBlur }) => {
  const calculateTotalPrice = (quantity, price) => {
    if (!quantity) quantity = 1;
    return price * quantity;
  };

  return (
    <FieldArray
      name='items'
      render={(arrayHelpers) => (
        <>
          {values.items?.length > 0 &&
            values.items.map((item, index) => (
              <div key={index}>
                <Flex mb='1.8'>
                  <Field
                    as={ItemInputs}
                    handleBlur={handleBlur}
                    mr='1.5'
                    type='text'
                    name={`items.${index}.name`}
                    width='20'
                  />
                  <Field
                    as={ItemInputs}
                    handleBlur={handleBlur}
                    mr='1.5'
                    type='number'
                    name={`items.${index}.quantity`}
                    width='5'
                    min='0'
                  />
                  <Field
                    as={ItemInputs}
                    handleBlur={handleBlur}
                    mr='1.5'
                    type='number'
                    name={`items.${index}.price`}
                    width='10'
                    min='0'
                  />
                  <Sum>
                    {calculateTotalPrice(item.quantity, item.price)}
                  </Sum>
                  <IconContainer
                    onClick={() => arrayHelpers.remove(index)}
                    ml='4'
                  >
                    <Icon src={icon} alt='trash icon' />
                  </IconContainer>
                </Flex>
              </div>
            ))}
          <>
            <Button
              onClick={() =>
                arrayHelpers.push({
                  name: '',
                  quantity: '',
                  price: ''
                })
              }
              type='button'
              sixth
            >
              + Add New Item
            </Button>
          </>
        </>
      )}
    />
  );
};

export default FormItemListInputs;
