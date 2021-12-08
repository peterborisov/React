import { useContext, useState, memo } from "react";
import { ExpenseContext } from "./ExpenseContext";
import FormInput from "../FormInput";

const ExpenseForm = () => {
  const { dispatch } = useContext(ExpenseContext);
  const [cost, setCost] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_EXPENSE', expense: { cost, title } });
    setCost('');
    setTitle('');
  }

  const handleCostChange = (e) => {
    setCost(e.target.value)
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <FormInput placeholder='Enter title' value={cost} handleOnchange={handleCostChange} />
      <FormInput placeholder='Enter description' value={title} handleOnchange={handleTitleChange} />
      <input type='submit' value='Add Expense' />
    </form>
  );
}

export default memo(ExpenseForm);