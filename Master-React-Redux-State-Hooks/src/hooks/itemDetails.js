import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItemAction, updateItemAction } from '../actions/items';
import { v4 as uuidv4 } from 'uuid';
import { closeEditModal } from '../actions/modals';

const ItemDetails = (desc = '', val = '', isExp = true) => {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  const updateItem = (id) => {
    dispatch(updateItemAction(id, { id, description, value, isExpense, }));
    dispatch(closeEditModal());
    resetValues();
  }

  const addItem = () => {
    dispatch(addItemAction({id: uuidv4(),description,value,isExpense,}));
    resetValues();
  }

  const resetValues = () => {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  return {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addItem,
    updateItem,
  };
}

export default ItemDetails;
