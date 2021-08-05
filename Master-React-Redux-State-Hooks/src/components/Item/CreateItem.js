import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from '../ButtonSaveOrCancel';
import ItemForm from './ItemForm';
import itemDetails from '../../hooks/itemDetails';

const CreateItem = () => {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addItem,
  } = itemDetails();

  return (
    <Form unstackable>
      <ItemForm
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />

      <ButtonSaveOrCancel addItem={addItem} />
    </Form>
  );
}

export default CreateItem;
