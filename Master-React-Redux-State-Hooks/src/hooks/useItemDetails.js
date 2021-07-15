import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addItemRedux, updateItemRedux } from '../actions/items.actions';
import { v4 as uuidv4 } from 'uuid';
import { closeEditModal } from '../actions/modals.actions';

function useItemDetails(desc = '', val = '', isExp = true) {
  const [description, setDescription] = useState(desc);
  const [value, setValue] = useState(val);
  const [isExpense, setIsExpense] = useState(isExp);
  const dispatch = useDispatch();

  useEffect(() => {
    setDescription(desc);
    setValue(val);
    setIsExpense(isExp);
  }, [desc, val, isExp]);

  function updateItem(id) {
    dispatch(
      updateItemRedux(id, {
        id,
        description,
        value,
        isExpense,
      })
    );
    dispatch(closeEditModal());
    resetValues();
  }

  function addItem() {
    dispatch(
      addItemRedux({
        id: uuidv4(),
        description,
        value,
        isExpense,
      })
    );
    resetValues();
  }

  function resetValues() {
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

export default useItemDetails;
