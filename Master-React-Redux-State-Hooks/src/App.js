import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import './App.css';
import Balance from './components/Balance/Balance';
import Balances from './components/Balance/Balances';
import Items from './components/Item/Items';
import MainHeader from './components/MainHeader';
import EditItemModal from './components/Item/EditItemModal';
import CreateItem from './components/Item/CreateItem';
import { useSelector } from 'react-redux';

const App = () => {
  //Hooks
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [item, setItem] = useState({});
  const { isOpen, id } = useSelector((state) => state.modals);
  const items = useSelector((state) => state.items);

  useEffect(() => {
    const index = items.findIndex((item) => item.id === id);
    setItem(items[index]);
  }, [isOpen, id, items]);

  // Calculate balance
  useEffect(() => {
    let totalIncomes = 0;
    let totalExpenses = 0;
    items.map((item) => {
      if (item.isExpense) {
        return (totalExpenses += +item.value);
      }
      return (totalIncomes += +item.value);
    });
    setTotal(totalIncomes - totalExpenses);
    setExpenseTotal(totalExpenses);
    setIncomeTotal(totalIncomes);
  }, [items]);

  return (
    <Container>
      <MainHeader title='Budget' />
      <Balance title='Your Balance:' value={total} size='small' />
      <Balances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />
      <MainHeader title='History' type='h3' />
      <Items items={items} />
      <MainHeader title='Add new transaction' type='h3' />
      <CreateItem />
      <EditItemModal isOpen={isOpen} {...item} />
    </Container>
  );
}

export default App;
