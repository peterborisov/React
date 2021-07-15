import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonSaveOrCancel from '../ButtonSaveOrCancel';
import ItemForm from './ItemForm';
import useItemDetails from '../../hooks/useItemDetails';

function NewItem() {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addItem,
  } = useItemDetails();

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

export default NewItem;
