import './App.css';
import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';

//Components
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewentryForm';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import EditItem from './components/EditItem'
let initialEntries =
  [
    {
      id: 1, description: 'Work income', value: 100, isExpense: false
    },
    {
      id: 2, description: 'Water bill', value: 20, isExpense: true
    },
    {
      id: 3, description: 'Rent', value: 200, isExpense: true
    },
    {
      id: 4, description: 'Power bill', value: 50, isExpense: false
    }
  ]

function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries];
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      setEntries(newEntries);
      setDescription('');
      setValue('');
      setIsExpense(true);
      resetEntry()
    }
  }, [isOpen])

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    entries.map(el => {
      if (el.isExpense) {
        return totalExpense += el.value;
      }
      return totalIncome += el.value;
    })
    setTotal(totalIncome - totalExpense);
    setExpenseTotal(totalExpense);
    setIncomeTotal(totalIncome);
  }, entries)

  const deleteEntry = (id) => {
    const result = entries.filter((el) => el.id !== id);
    setEntries(result)
  }

  const editEntry = (id) => {
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];

      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true);
    }
  }


  const resetEntry = () => {
    setDescription('');
    setValue('');
    setIsExpense(true);
  }

  const addEntry = () => {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense });
    setEntries(result);
    resetEntry();
  }

  return (
    <Container>
      <MainHeader title='Budget' />
      <DisplayBalance
        size='small'
        label='Your balance:'
        value={total}
        color='blue'
      />
      <DisplayBalances 
      expenseTotal={expenseTotal} 
      incomeTotal={incomeTotal}
      />
      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        setIsOpen={setIsOpen}
        editEntry={editEntry}
      />
      <MainHeader
        title='History'
        type='h3'
      />
      <MainHeader title='Add new transaction' type='h3' />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
      <EditItem
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
      />
    </Container>
  );
}

export default App;
