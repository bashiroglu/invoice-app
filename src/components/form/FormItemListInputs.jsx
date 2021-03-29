import { Field, FieldArray } from 'formik';
import icon from '../../assets/trash-icon.svg';
import { Button } from '../common';
import { Flex, Icon, IconContainer, ItemInputs, Sum } from './Form.styles';

const FormItemListInputs = ({ values, handleBlur }) => (
  <FieldArray
    name='items'
    render={(arrayHelpers) => (
      <>
        {values.items?.length > 0 &&
          values.items.map((_, index) => (
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
                  type='text'
                  name={`items.${index}.quantity`}
                  width='5'
                />
                <Field
                  as={ItemInputs}
                  handleBlur={handleBlur}
                  mr='1.5'
                  type='text'
                  name={`items.${index}.price`}
                  width='10'
                />
                <Sum>0{/* TODO: calculate sum of the items */}</Sum>
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

export default FormItemListInputs;
