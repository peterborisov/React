import React from 'react';
import { Form } from 'semantic-ui-react';
import SaveOrCancel from './ButtonSaveOrCancel';
import EntryForma from './EntryForma';

const  NewEntryForm = (props) => {
    const { addEntry, description, value, isExpense, setDescription, setValue, setIsExpense } = props;
   

    return (
        <Form unstackable>
            <EntryForma
                description={description}
                value={value}
                isExpense={isExpense}
                setDescription={setDescription}
                setValue={setValue}
                setIsExpense={setIsExpense}
            />
            <SaveOrCancel
                addEntry={addEntry}
            />
        </Form>
    )
}

export default NewEntryForm;