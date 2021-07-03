import React, { useState } from 'react';
import { Form, Segment, Checkbox } from 'semantic-ui-react';

const EntryForma = (props) => {
    const { description, value, isExpense, setDescription, setValue, setIsExpense } = props;
    
    return (
        <>
            <Form.Group>
                <Form.Input
                    icon='tags'
                    width={12}
                    label='Description'
                    placeholder='New Things'
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Form.Input
                    icon='dollar'
                    width={4}
                    label='Value'
                    placeholder='100.00'
                    iconPosition='left'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Form.Group>
            <Segment compact>
                <Checkbox
                    toggle
                    label='is expense'
                    checked={isExpense}
                    onChange={() => setIsExpense(oldState => !oldState)}
                />
            </Segment>
        </>
    )
}

export default EntryForma;