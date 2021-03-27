import { Field } from 'formik';
import { Flex, ItemInputs } from './Form.styles';

const FormItemListInputs = ({ formItems, setFormItems, handleBlur }) => {
  const deleteItem = (id) => {
    setFormItems(Object.keys(formItems).filter((item) => item !== id));
  };

  return Object.keys(formItems).map((item) => (
    <div key={item}>
      <Flex mb='1.8'>
        <Field
          as={ItemInputs}
          handleBlur={handleBlur}
          mr='1.5'
          type='text'
          name='items.name'
          width='20'
        />
        <Field
          as={ItemInputs}
          handleBlur={handleBlur}
          mr='1.5'
          type='text'
          name='items.quantity'
          width='5'
          min='0'
        />
        {/* <Field
          as={ItemInputs}
          handleBlur={handleBlur}
          mr='1.5'
          type='text'
          name='items.price'
          width='10'
          defaultValue={items.price}
        />
        <Sum>{items.total}</Sum>
        <IconContainer onClick={() => deleteItem(item)} ml='4'>
          <Icon src={icon} alt='trash icon' />
        </IconContainer> */}
      </Flex>
    </div>
  ));
};

export default FormItemListInputs;
